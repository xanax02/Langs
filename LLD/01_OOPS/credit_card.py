from . import card

class CreditCard(card.Card):

    def __init__(self, card_number, card_name):
        super().__init__(card_number, card_name)

    def pay() :
        print("Making payment via credit card.")