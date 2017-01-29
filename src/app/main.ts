import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app.module";

platformBrowserDynamic().bootstrapModule(AppModule).then(() => {
        console.log("Welcome to Angular 2.0!!!");
    },(error) => {
        console.error(error);
    });