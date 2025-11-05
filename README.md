[![Profile](https://img.shields.io/badge/Author-Craig_Beveridge-2b3137?style=flat&logo=github)](https://github.com/cbeveridge74)
[![View Skills Summary](https://img.shields.io/badge/View%20My-Skills%20Summary-blue?style=flat&logo=markdown)](https://github.com/cbeveridge74)

# 2023

# Prison Health

This repository contains the **foundations for a system designed to manage medications for patients within the Prison Service**.  
The project aimed to create a comprehensive digital solution for medication administration, ordering, review, and detox management — but was unfortunately **put on hold indefinitely**, so development stopped at an early but solid foundational stage.

**NOTE: DoseParser is a submodule and contained within a Private repo which will make some tests fail and not allow the app to be run.  Please request access to the private repo.**

---

## Domain Model Overview

A complete **domain model** is included, covering several key areas of prison healthcare:

### Medication Administration
Tracks:
- **Location** of administration (in-cell or at a central hub)
- **Quantity** administered
- **Frequency** of administration

### Orders
Defines the process by which **NHS staff** in the prison:
- Order medications
- Track medication **quantities** and **shortfalls**
- Monitor the **status** of orders over time

### Medication Reviews
Manages:
- The scheduling and recording of **regular reviews** for each patient’s medications

### Detox Programs
Supports:
- Management of **detoxification programs** for patients with substance addictions  
  (e.g., **Opioids**, **Benzodiazepines**)

---

## Utilities

Several utility functions and services extend the domain model, including:

- **Administration Event Calculations**  
  Calculates the number of expected administration events for a given medication.
- **Daily Frequency and Quantity Calculations**  
  Determines daily dosages and totals for medications.
- **Order Search**  
  Provides mechanisms to find orders associated with specific medications.
- **Actual vs. Expected Quantities**  
  Computes the actual quantities received for an order compared with expected amounts.

---
## Usage

```
npm i
```

## Testing

All **domain** and **utility** logic is tested using **Jest**.  
You can run the tests with:

```
npm test
```

## Running in browser

NOTE: This is purely a test harness for testing the model and accompanying utilities in realtime (work in progress)

```
npm run start
```
Then navigate to 

```
http://localhost:3000/medications
```

---

## Redux Foundations

Includes the initial setup of **Redux Reducers** and **Actions** that will later support application state management.

---

## UI Status

There is **no user interface (UI)** implemented at this stage.  
The repository focuses entirely on the **core business logic and domain structure**.

---

## Project Status

> This project has been **paused indefinitely**.  
> While incomplete, it provides a strong foundation for future work in digital medication management for prison healthcare systems.

---

## Tech Stack

- **TypeScript**
- **Jest**
- **Redux (Foundations only)**

---

## License

This project is currently unlicensed and was developed as part of exploratory work for a healthcare system concept.
