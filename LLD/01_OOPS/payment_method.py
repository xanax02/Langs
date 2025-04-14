from abc import ABC, abstractmethod

class PaymentMethod(ABC):

    @abstractmethod
    def pay(self):
        pass