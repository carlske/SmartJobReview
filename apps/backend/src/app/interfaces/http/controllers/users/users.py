from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.infrastructure.db.get_db import get_db
from app.infrastructure.db.models.user_orm import UserORM
from app.interfaces.schemas.user import UserCreate, UserRead

router = APIRouter(prefix="/users", tags=["users"])


@router.post("/", response_model=UserRead, status_code=201)
def create_user(payload: UserCreate, db: Session = Depends(get_db)):
    exists = db.query(UserORM).filter(UserORM.email == payload.email).first()
    if exists:
        raise HTTPException(status_code=409, detail="Email already registered")
    obj = UserORM(email=payload.email, full_name=payload.full_name)
    db.add(obj)
    db.commit()
    db.refresh(obj)
    return obj


@router.get("/{user_id}", response_model=UserRead)
def get_user(user_id: int, db: Session = Depends(get_db)):
    obj = db.get(UserORM, user_id)
    if not obj:
        raise HTTPException(status_code=404, detail="User not found")
    return obj
