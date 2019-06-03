from sqlalchemy import Column, Integer, String, Sequence, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from database import connector


class User(connector.Manager.Base):
    __tablename__ = 'users'
    id = Column(Integer, Sequence('user_id_seq'), primary_key=True)
    name = Column(String(50))
    fullname = Column(String(50))
    password = Column(String(12))
    username = Column(String(12))
    #type = Column(String(12)) - Esto debería ir para asignar un tipo de user (cliente, admin o repartidor)

class Pedido(connector.Manager.Base):
    __tablename__ = 'users'
    id = Column(Integer, Sequence('user_id_seq'), primary_key = True)
    pedido = Column(String(50))
    direccion = Column(String(50))
    fecha = Column(String(12))
    estado = Column(String(12)) #Pendiente o realizado
