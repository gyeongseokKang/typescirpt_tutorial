import { BaseComponent } from "../../component.js";

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`
<section class="video">
	<div class="video__player"><iframe class="video__iframe"></iframe></div>
	<h3 class="video__title"></h3>
</section>`);

    const iframe = this.element.querySelector(".video__iframe")! as HTMLIFrameElement;
    iframe.src = this.convertToEmbeddedURL(url);
    console.log(url);

    const titleElement = this.element.querySelector(".video__title")! as HTMLHeadingElement;
    titleElement.textContent = title;
  }

  private convertToEmbeddedURL(url: string): string {
    const videoId = url.split("/").slice(-1)[0]?.split("=").slice(-1)[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }
}

// <iframe width="887" height="499" src="https://www.youtube.com/embed/WowdmR8Z81A" title="YouTube video player"
// 	frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
// 	allowfullscreen></iframe>
