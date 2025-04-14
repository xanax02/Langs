from abc import ABC, abstractmethod

#interface
class PaymentMethod(ABC):

    @abstractmethod
    def pay(self):
        pass


#abstract class for cards
class Card(PaymentMethod):

    def __init__(self, card_number, card_name):
        self.__card_number = card_number
        self.__card_name = card_name

    def get_card_number(self):
        return self.__card_number

    def get_card_name(self):
        return self.__card_name

    def pay(self):
        pass


class CreditCard(Card):

    def __init__(self, card_number, card_name):
        super().__init__(card_number, card_name)

    def pay(self) :
        print("Making payment via credit card.")


class DebitCard(Card):

    def __init__(self, card_number, card_name):
        super().__init__(card_number, card_name)

    def pay(self) :
        print("Making payment via debit card.")


class UPI(PaymentMethod):

    def __init__(self, upiId):
        self.upiId = upiId

    def pay(self):
        print(f"Making payment through UPI {self.upiId}")


#payment service
class paymentService:

    def __init__(self):
        self.payment_methods: dict[str, PaymentMethod] = {}

    def add_payment_method(self, name, payment_method): #storing payments
        self.payment_methods[name] = payment_method

    def make_payments(self, name):
        pm = self.payment_methods[name]
        pm.pay()


#client
class Client:
    ps = paymentService()

    ps.add_payment_method(name="AbhayHDFCDebitCar", payment_method=DebitCard(card_name='ABHAY', card_number='92834750982'))

    ps.add_payment_method(name="AbhayCreditCard", payment_method=CreditCard(card_name='abhay', card_number='3344334'))

    ps.add_payment_method(name='AbhayUPI', payment_method=UPI(upiId='klsjdflk'))

    ps.make_payments(name="AbhayHDFCDebitCar")
    ps.make_payments(name="AbhayCreditCard")
    ps.make_payments(name="AbhayUPI")
