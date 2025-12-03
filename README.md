# QA Automation Portfolio - Cypress

End-to-end automated tests for the Cypress Real World App, demonstrating practical QA skills in test design, UI automation, and error handling.

## Project Overview

This project contains automated test cases covering essential user flows including authentication and user registration. All tests are written using Cypress and follow industry best practices for test automation.

## Technologies

- Cypress - End-to-end testing framework
- JavaScript - Test scripting language
- Node.js - Runtime environment

## Test Cases

### Login Feature
- TC01: Successful login with valid credentials
- TC02: Login attempt with invalid credentials

### User Registration Feature
- TC03: Successful user registration with valid data
- TC04: Validation of required fields

## Getting Started

### Prerequisites

- Node.js v12 or higher
- npm or yarn package manager

### Installation

1. Clone this repository
2. Run: npm install
3. Clone and run Cypress Real World App on http://localhost:3000

### Running Tests

Open Cypress Test Runner: npx cypress open
Run tests in headless mode: npx cypress run

## Project Structure

portfolio-qa-cypress/
- cypress/e2e/ (test files)
- cypress/videos/ (test recordings)
- cypress/screenshots/ (test evidence)

## Test Approach

Tests follow the Arrange-Act-Assert pattern. Each test is independent and can run in isolation without dependencies on other tests.

## Author

Your Name - GitHub: @gustavo-magalhaes