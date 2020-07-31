#![feature(proc_macro_hygiene, decl_macro)]
#[macro_use] extern crate rocket;
extern crate rocket_codegen;
extern crate rocket_contrib;
#[macro_use] extern crate serde_derive;
use rocket_contrib::templates::Template;
use rocket_contrib::serve::StaticFiles;
use serde::Serialize;
use rocket_contrib::json::Json;

#[derive(Serialize)]
struct IndexContext {
    hello: String,
}


#[get("/")]
fn index() -> Template {
    let context = IndexContext {
        hello: "Rocket.rs!".to_string()
    };
    Template::render("index", &context)
}

#[derive(Serialize)]
struct ContentModel {
    api_content : String
}
#[get("/api/content")]
fn content() -> Json<ContentModel> {
    Json({
        ContentModel { api_content: "This Content Comes From Rocket.rs backend!".to_string() }
    })
}

fn main() {
    rocket::ignite()
        .mount("/", routes![index, content])
        .mount("/static", StaticFiles::from(concat!(env!("CARGO_MANIFEST_DIR"), "/static")))
        .attach(Template::fairing())
        .launch();
}