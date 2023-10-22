# STEP-ERGIZE
## Your Footsteps👟, Your Power 💫
## Github Tutorial, created by our team at HackHarvard 2023

<img width="280" alt="Screenshot 2023-10-21 at 1 06 07 PM" src="https://github.com/audgeviolin07/stepup/assets/69458308/81cc4751-c830-445c-8bb8-4c09135a666a">

Step-ergize is a customized shoe that empowers individuals with visual impairments, enabling them to walk independently, confidently, and in style while generating energy from their own footsteps!

<img width="411" alt="Screenshot 2023-10-22 at 3 07 17 AM" src="https://github.com/audgeviolin07/stepup/assets/123830780/95e8d535-3ca8-4d7b-8a03-9e7e44f8989a">

Got tech is-shoes?(Issues) we solve them for you : P

## Inspiration
We noticed that the more advanced tech for visually impaired individuals included sensors that weren't self-sustainable. We wanted to set the bar higher so that those individuals wouldn't have to recharge their aids to navigate the world. 

## What it does
Through each stride, piezoelectric crystals transfer mechanical stress energy to electricity, powering a complete circuit of ultrasonic sensors, Arduino board, and Bluetooth components. The ultrasonic sensors will track the distance of the closest obstacle in  our walking direction and update it continuously in the app through a Bluetooth connection. Suppose the obstacle distance to the user is under a certain threshold. In that case, the app will send out warnings with different levels to notify them.

![demo](https://github.com/audgeviolin07/step-ergize/assets/129197465/dc271611-0119-42b8-9fc2-8a171f8e1c4a)

## How we built it
Our working process is divided into three steps: setting up the circuit, building our React Native app and connecting the hardware and software. We joined six pieces of piezoelectric crystals into three pairs with cartons and styrofoam in between. The piezoelectric crystals were connected in series with an Arduino Nano Board, a pair of ultrasonic distance sensors, and an HC05 Bluetooth module. The circuit functionality was first tested with LED light. After testing, we glued the crystals on the sole of the shoes, with the ultrasonic on the head of the shoes. Data collected will be transferred to serial ports through Bluetooth. We approached the app with a minimalistic UI and focused more on the audio aspects for our targeted audience. The app consists of a landing page welcoming users to the application. Once they start the journey, the app will move right into the detecting distance mode. Warnings are given out in both audio and text form.

## Challenges we ran into
The biggest challenge we've faced were working with limited resources, including hardware components and time constraint. However, we've managed to finish on time.

## Accomplishments that we're proud of
We have built a fully functional energy-harvesting circuits that can sustains itself!!!
Better the status quo of people with visual impairements

## What we learned
Soldering, converting AC to DC power for IoT by building a bridge rectifier for the first time !

## What's next for Step-ergize
More distance sensors
Emergency location sharing feature (voice-command)

## Build with
React Native, Expo speech library, MicroPython, Arduino, Distance Sensor, Piezoelectric Crystals
