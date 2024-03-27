import paho.mqtt.client as mqtt

mqttBroker = "test.mosquitto.org"

class TemperatureServiceClient:

  def __init__(self):
              self.client = mqtt.Client()
              self.client.connect(mqttBroker)

  def sendTemperatureDrop(self, id):
          topic = "temperature/dropped"
          self.client.publish(topic, id)
  def sendTemperatureRise(self, id):
          topic = "temperature/risen"
          self.client.publish(topic, id)

