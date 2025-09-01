from sqlalchemy import String
from sqlalchemy.orm import Mapped, mapped_column

from src.app.infrastructure.db.models.base_orm import BaseORM


class UserORM(BaseORM):
    __tablename__ = "users"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    email: Mapped[str] = mapped_column(
        String(255), unique=True, index=True, nullable=False
    )
    full_name: Mapped[str | None] = mapped_column(String(255), nullable=True)
