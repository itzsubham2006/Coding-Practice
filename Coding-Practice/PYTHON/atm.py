class ATM:
    
    def __init__(self):
        
        self.balance = 100000
        print(f"ATM object created successfully!!.. \nPlease set the pin for more benefits.\n You have {self.balance} amount in the bank.")
        
    def set_pin(self):
          
        User_pin = int(input("Enter the pin: "))
        user_confirm = int(input("Confirm the pin: "))
        
        if (user_confirm == User_pin):
            return user_confirm
        
        else:
            print("Pin doesn't matched!!..")
            
        
            
        
    def withdraw_money(self):
        # check pin
        original_pin = self.set_pin()
        
        
        user_pin = int(input("Enter the pin: "))
        
        if(user_pin==original_pin):
            
            withdraw_amount = int(input("Enter the amount to withdraw: "))
            
            if(self.balance<=withdraw_amount):
                
                print(f"{withdraw_amount} Withdraw successfully!")
                self.balance = self.balance - withdraw_amount
            else:
                print("!!...Insufficiant balance..!!")
    
    def add_money(self):
        
        original_pin = self.set_pin()
        
        user_pin = int(input("Enter the pin: "))
        
        if(user_pin==original_pin):
            
            add_amount = int(input("Enter the amount to withdraw: "))
            
            if(add_amount):
                print(f"{add_amount} added successfully!")
                self.balance = self.balance +add_amount
          
        
    def check_balance(self):
        
        original_pin = self.set_pin()
        user_pin = int(input("Enter the pin: "))
        
        if(user_pin==original_pin):
            return f"Balance = {self.balance}"
        else:
            return "Error!!..Please enter the correct pin."
        
        
            
            
            
        
a1 = ATM()
a1.add_money()