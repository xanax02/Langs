from .payment_method import PaymentMethod

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
