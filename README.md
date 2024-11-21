# CipherVeil

Welcome to the CipherVeil repository! This project focuses on creating a steganography application that enables users to hide sensitive information within digital images while maintaining the visual integrity of the cover image.

## Table of Contents

- [Introduction](#introduction)
- [Objectives](#objectives)
- [Problem Statement](#problem-statement)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Execution Steps](#execution-steps)
- [Results](#results)
- [Output](#output)
- [Contributors](#contributors)

## Introduction

CipherVeil is a steganography tool designed to hide or extract sensitive information from various digital media formats, ensuring both security and ease of use. The project provides robust techniques for concealing data while supporting multiple file formats and ensuring data integrity.

## Objectives

The objectives of this project include:

1. **Secure Data Embedding:** Implement methods to securely hide data within media files.
2. **Data Extraction:** Ensure reliable extraction of hidden information from steganographic files.
3. **User-Friendly Interface:** Provide an intuitive GUI for embedding and retrieving data.
4. **Enhanced Security:** Use encryption and decryption to improve the security of concealed data.

## Problem Statement

To design and develop an application that uses steganography techniques to securely embed and extract data from digital media while maintaining the original media's integrity and visual quality.

## Features

CipherVeil offers the following features:

1. **Data Embedding:** Supports embedding text or binary data within images, audio, and video files.
2. **Data Extraction:** Extracts hidden information from steganographic files.
3. **Multi-Format Support:** Works with text (`.txt`), image (`.png`), audio (`.wav`), and video (`.mp4`) files.
4. **Encryption and Decryption:** Incorporates encryption mechanisms to protect hidden information.
5. **Graphical User Interface (GUI):** Provides an easy-to-use interface for users.

## Technologies Used

### Frontend
- **HTML:** For structuring the web pages.
- **CSS:** For styling and layout design.
- **Bootstrap:** For responsive design and pre-designed UI components.
- **JavaScript:** For client-side interactivity.

### Backend
- **Python:** For backend logic and algorithms.
- **Flask:** For building the web application.

### Additional Libraries and Tools
- **Pillow (PIL):** For image processing.
- **Cryptography:** For encryption and decryption.
- **NumPy:** For data manipulation.
- **OpenCV:** For video and multimedia processing.

## Execution Steps

To execute CipherVeil on your local machine, follow these steps:

1. **Install Dependencies:**
   - Install Python and pip.
   - Install required libraries using the command:
     ```bash
     pip install pillow cryptography opencv-python
     ```

2. **Download the Project Files:**
   - Clone or download the project repository:
     ```bash
     git clone https://github.com/your-username/CipherVeil.git
     ```
   - Navigate to the project directory:
     ```bash
     cd CipherVeil
     ```

3. **Run the Application:**
   - Run the main application file:
     ```bash
     python cipherveil.py
     ```

4. **Embed or Extract Data:**
   - Use the GUI to select a media file, choose the desired action (embed/extract), and follow the prompts.

## Results

CipherVeil successfully demonstrates the use of steganography to embed and extract data securely while maintaining the quality of media files.

## Output 

![Application Screenshot](application_screenshot.png)

## Contributors

- **Palak Rajput**  

This project was completed under the guidance of Savitribai Phule Pune University as part of the MCA program for the academic year 2023-24.
