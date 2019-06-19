from sqlalchemy import Column, Integer, String, Sequence, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from database import connector


class User(connector.Manager.Base):
    __tablename__ = 'users'
    id = Column(Integer, Sequence('user_id_seq'), primary_key=True)
    name = Column(String(50))
    tipo = Column(String(50))
    password = Column(String(12))
    username = Column(String(12))

class Pedido(connector.Manager.Base):
    __tablename__ = 'Pedido'
    id = Column(Integer, Sequence('pedido_id_seq'), primary_key = True)
    pedido = Column(String(50))
    usuario = Column(String(50))
    direccion = Column(String(50))
    fecha = Column(String(12))
    estado = Column(String(12))

class Pedido2(connector.Manager.Base):
    __tablename__ = 'Pedido2'
    id = Column(Integer, Sequence('pedido2_id_seq'), primary_key = True)
    pedido = Column(String(50))
    usuario = Column(String(50))
    direccion = Column(String(50))
    fecha = Column(String(12))
    estado = Column(String(12))