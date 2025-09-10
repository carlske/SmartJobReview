from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.interfaces.http.controllers.users.users import router

app = FastAPI(title="Smart Job Review API", version="1.0.0")


def init_middlewares(app: FastAPI):
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=False,
        allow_methods=["*"],
        allow_headers=["*"],
    )


def init_routers(app: FastAPI):
    @app.get("/")
    async def root():
        return {"message": "welcome"}


def create_app() -> FastAPI:
    app = FastAPI()
    app.include_router(router, prefix="/api/v1", tags=["users"])
    init_middlewares(app)
    init_routers(app)
    return app


app = create_app()
