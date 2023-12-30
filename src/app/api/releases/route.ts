import { NextResponse } from "next/server";
import { JSDOM } from "jsdom";
import puppeteer from "puppeteer";
import isStringNull from "@/app/helper/isStringNull";

interface dataLofiProps {
  src: string | null;
  title: string | null;
  imageUrl: string | null;
}
export async function GET(req: Response) {
  try {
    const url = new URL(req.url);
    const searchParam = new URLSearchParams(url.searchParams);

    const browser = await puppeteer.launch(); // set headless to true for running in the background
    const page = await browser.newPage();

    const albumUrl = `https://lofigirl.com/releases/${searchParam.get(
      "album"
    )}/`;

    await page.goto(albumUrl);

    await new Promise((r) => setTimeout(r, 2000));

    const html = await page.content();

    await browser.close();

    const dom = new JSDOM(html);
    const document = dom.window.document;

    const listLofi = document.querySelectorAll(".jet-listing-grid__item");
    const dataLofi: Array<dataLofiProps> = [];

    const albumImageUrl: string | null =
      document
        .querySelector(".jet-listing-dynamic-image__link")
        ?.getAttribute("href") || "";

    listLofi?.forEach((lofi) => {
      dataLofi?.push({
        src: lofi?.querySelector("audio")?.getAttribute("src") || "",
        title:
          lofi
            .querySelector(
              ".elementor-column:nth-child(2)  .elementor-widget-wrap  .elementor-element:nth-child(2) .elementor-widget-container"
            )
            ?.textContent?.trim() || "",
        imageUrl: albumImageUrl,
      });
    });

    return NextResponse.json(
      {
        message: "success",
        data: dataLofi?.filter((lofi) => !isStringNull(lofi?.src || "")),
        status: 200,
      },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json({ message: `err : ${e}` }, { status: 400 });
  }
}
