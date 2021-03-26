import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import { PageComponent } from "./components/page/page.js";
class App {
    constructor(appRoot) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
        const image = new ImageComponent("Image title", "https://picsum.photos/600/300");
        image.attachTo(appRoot, "beforeend");
        const video = new VideoComponent("Video TItle", "https://youtu.be/WowdmR8Z81A");
        video.attachTo(appRoot, "beforeend");
        const note = new NoteComponent("Note TItle", "Note Body");
        note.attachTo(appRoot, "beforeend");
        const todo = new TodoComponent("todo TItle", "todo Body");
        todo.attachTo(appRoot, "beforeend");
    }
}
new App(document.querySelector(".document"));
