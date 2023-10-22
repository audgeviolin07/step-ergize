// Define the pins
const int trigPin = 2;
const int echoPin = 3;

void setup() {
  // Initialize serial communication
  Serial.begin(115200);
  
  // Define the trigPin as an OUTPUT
  pinMode(trigPin, OUTPUT);
  
  // Define the echoPin as an INPUT
  pinMode(echoPin, INPUT);
}

void loop() {
  // Create a pulse for the HC-SR04
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  
  // Measure the echo duration
  long duration = pulseIn(echoPin, HIGH);
  
  // Calculate distance in centimeters
  float distance_cm = (duration / 2) / 29.1;
  
  // Print the distance to the serial monitor
  Serial.print("Distance: ");
  Serial.print(distance_cm);
  Serial.println(" cm");
  
  // Add a short delay between measurements
  delay(500);
}
