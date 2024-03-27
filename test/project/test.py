from client import TemperatureServiceClient
from random import randrange
import time

client = TemperatureServiceClient()

id_length = 8
min_value = 10**(id_length-1)  # Minimum value with 8 digits (e.g., 10000000)
max_value = 10**id_length - 1  # Maximum value with 8 digits (e.g., 99999999)

while True:
    randomId = randrange(min_value, max_value + 1)
    client.sendTemperatureDrop(randomId)
    print("Temperature drop detected " + str(randomId) + " sent to temperature/dropped")
    client.sendTemperatureRise(randomId)
    print("Temperature rise detected " + str(randomId) + " sent to temperature/risen")
    time.sleep(1)
