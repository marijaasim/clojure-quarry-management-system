# Quarry Management System

**Web Application for Quarry Management**

---

## 1. Introduction and Motivation

The topic of this project is the development of a web application for quarry management. The application is developed in the Clojure programming language, using the functional paradigm, and represents a practical application of software engineering tools and methods, as well as basic artificial intelligence techniques.

The topic was chosen out of personal and practical necessity, considering that my family is engaged in stone extraction and quarry management. The goal of the application is to model real processes from everyday business operations: tracking extracted stone, managing blocks, calculating prices and revenues, as well as predicting future production.

The project was developed using basic software engineering principles, including modular architecture, clear separation of responsibilities between system layers (frontend, backend, database), and iterative development with continuous functionality testing. Special attention was paid to code readability and maintainability, in line with the functional paradigm encouraged by Clojure.

---

## 2. Application Description

The application is a **full-stack web application** consisting of:

- **Backend** (Clojure + Ring + Compojure)
- **Frontend** (ClojureScript + Reagent)
- **PostgreSQL database**
- **Prediction module based on linear regression**

The application enables:

- entry of daily stone extraction data
- automatic calculation of block volume and mass
- classification of blocks by quality and dimensions
- inventory overview and filtering
- price and revenue calculation
- prediction of future monthly production and revenue

The project was implemented as a deps.edn Clojure project, using the standard Clojure toolchain, ensuring simple dependency management and a clear project structure. The application was developed in the IntelliJ IDEA development environment, using the Cursive plugin, which enables efficient work with Clojure and ClojureScript code, REPL, and clear organization of functional code.

---

## 3. System Architecture

### Backend

The backend is implemented as a **REST API** using:

- Ring – HTTP server
- Compojure – route definition
- next.jdbc – communication with the PostgreSQL database
- Apache Commons Math – linear regression

**Main backend modules:**

- `db.clj` – database access
- `block.clj` – stone block logic
- `price.clj` – pricing and revenue calculation
- `prediction.clj` – predictive model
- `api.clj` – REST API layer
- `server.clj` – server startup

### Frontend

The frontend is written in **ClojureScript** using **Reagent** (React wrapper).

**Main application pages:**

- Daily Extraction
- Inventory
- Price
- Prediction

The data flow through the application follows a clear full-stack model. The user enters data via frontend forms, after which the data is sent to the backend layer via REST API calls. On the backend side, input data is validated and processed according to the system’s business logic, after which the relevant data is written to or read from the database. The processed results are then returned to the frontend application, where they are displayed to the user in a clear and understandable form. This flow enables a clear separation of responsibilities between system layers and facilitates maintenance and future extension of the application.

The system architecture is designed so that the backend functions as an independent service exposing a REST API, while the frontend is a client application responsible exclusively for presentation and user interaction. This approach enables easier testing, future system extension, and potential replacement or upgrade of individual layers without affecting the entire application.

### Domain Modeling

The central entity in the system is **Block**, representing a physical stone block with dimensions, volume, mass, quality class, and category.

The **Daily Extraction** entity models daily production and connects an extraction date with a set of associated blocks, reflecting real quarry workflows.

Although the system does not use classical ORM entities, the functional approach in Clojure enables clear manipulation of maps representing domain objects.

---

## 4. Functionalities by Pages

### 4.1 Daily Extraction

- entry of daily extraction date
- entry of total extracted mass
- adding individual blocks
- automatic calculation of block mass
- •	validation that the sum of block masses does not exceed the total mass
- saving data to the database

### 4.2 Inventory

- overview of all blocks
- filtering by:
    - mass
    - date
    - class
    - category
- editing block dimensions and characteristics
- automatic mass recalculation
- safe block deletion with user confirmation
- backend-side validation

### 4.3 Price

- block price calculation based on class, category, and mass
- revenue calculation for a selected period

### 4.4 Prediction (Artificial Intelligence)

- prediction of total mass for the next month
- prediction of block distribution by classes and categories
- future revenue estimation

---

## 5. Artificial Intelligence – Linear Regression

Production prediction uses **multiple linear regression (OLS - Ordinary Least Squares)**.

**Input variables:**

- time index (trend)
- seasonal factor (winter, spring, summer, autumn)
- average daily production

The model is implemented using:

**org.apache.commons.commons-math3**

Prediction is performed exclusively based on completed months, while the current month is ignored to avoid bias.

Within the system, linear regression is applied as a method for predicting future production values. More complex “black box” machine learning methods were intentionally not used, as one of the goals of the project was to ensure that results are transparent and easily explainable to both technical and non-technical system users.

Linear regression was chosen because it enables clear interpretation of the influence of individual parameters on the final result, which is particularly important in a business environment such as quarry management. Additionally, this model is fully adequate for a relatively small set of available historical data and enables reliable, albeit simple, business predictions.

The model is trained on existing production data, and its results are used solely as decision-support information rather than as an absolute and unquestionable forecast. The limitations of the model are acknowledged, especially in cases of sudden changes in working conditions or lack of historical data.

Prediction of total monthly production is based on the regression model, while the distribution of mass by block classes and categories is performed based on historical proportions obtained from the database. This combination of an algorithmic approach and empirical distribution provides more stable and realistic results under conditions of a limited data set.

In this way, the project connects classical software engineering principles with elementary artificial intelligence methods, in accordance with the goals of the course Tools and Methods of Software Engineering and Artificial Intelligence, where the emphasis is on understanding methods rather than their complexity.

The predictive model implemented within this application is based on historical quarry production data and assumes relative stability of working conditions in the future. The model does not account for unexpected external factors such as weather conditions, machinery failures, changes in market demand, or organizational delays.

Additionally, prediction accuracy directly depends on the quantity and quality of available data. In cases where the historical data set is small or uneven (e.g., months with very few working days), results should be considered indicative rather than as an absolute forecast.

Despite these limitations, the model provides useful analytical support for production planning and business decision-making, especially under stable operating conditions.

---

## 6. Running the Application

### Prerequisites

- Java 17+
- Clojure CLI
- Node.js
- PostgreSQL

### Database Configuration

The project includes a PostgreSQL database export.

To import the provided database into your PostgreSQL instance, follow these steps:
1.	Create an empty database in PostgreSQL (e.g. quarry)
2.	Navigate to the directory containing the exported .sql file
3.	Run the following command:

**psql -U your_username -d quarry -f quarry.sql**

Alternatively, the database can be imported using DBeaver:
1) Right-click on the target database
2) Choose Tools → Restore database
3) Select the provided .sql file and follow the wizard

In the db.clj file, the following configuration is defined:

```clojure
{:dbtype  "postgresql"
 :dbname  "querry"
 :host    "localhost"
 :port    5432
 :user    "marijasimovic"}
```

⚠️ When running the application, you should:
- check the port (most commonly 5432),
- replace the user with your PostgreSQL username,
- add :password if necessary.

### Running the Application

In the project folder, start two terminals:

Terminal 1 – frontend:

```npx shadow-cljs watch app```

Terminal 2 – backend:

```clojure -M -m quarry-management.server```

The application is available at:
http://localhost:3000/


## 7. Used Libraries

| Library               | Purpose                |
|-----------------------|-----------------------|
| org.clojure/clojure   | Core language          |
| reagent               | Frontend (React)       |
| ring-core             | HTTP server            |
| ring-jetty-adapter    | Jetty server           |
| ring-json             | JSON processing        |
| compojure             | Routing                |
| next.jdbc             | Database access        |
| postgresql            | PostgreSQL driver      |
| commons-math3         | Linear regression      |
| shadow-cljs           | Frontend build         |
All listed libraries are actively used in the application.

Using the Reagent library enabled frontend logic to be written in the same functional style as the backend, contributing to code consistency and easier understanding of the entire system.

## 8. Literature and References

- Clojure for the Brave and True

- Official Clojure documentation

- Official Reagent documentation

- Apache Commons Math documentation

- PostgreSQL documentation

During the development of the project, concepts from the book Clojure for the Brave and True were used, particularly regarding functional thinking, working with sequences, map/reduce patterns, immutable data structures, and function composition. These concepts were directly applied in processing extraction data, filtering inventory, and preparing data for the predictive model.

## 9. Challenges During Development

The main challenges during the project were:
- connecting the Clojure backend and ClojureScript frontend,
- working with dates and type conversions,
- proper data validation,
- implementation of the regression model.

During development, I faced multiple challenges, particularly learning Clojure and ClojureScript in parallel and adapting my way of thinking to the functional paradigm compared to the classical imperative approach. An additional challenge was integrating the machine learning component with the rest of the business logic while maintaining code readability and modularity.

## 10. Parts I Am Particularly Proud Of

- complete block classification and calculation logic,
- realistic quarry model,
- integration of the predictive model into a business application,
- the fact that the application has real practical value,
- integration of mass prediction with future revenue calculation as a concrete business metric.

The focus of this application is not exclusively on frontend visual design or the implementation of complex artificial intelligence algorithms, but on developing a complete, functional full-stack application that connects a real business problem with a software solution.

Special focus was placed on:
- integration of frontend and backend layers,
- consistent data flow throughout the entire system (from user input, through processing and validation, to result presentation),
- application of the functional paradigm in a real system,
- use of a simple but justified machine learning method – linear regression.

The frontend part of the application is not focused on aesthetics but serves as the central point of user interaction with the system: through data input forms, inventory overview, filtering, calculations, and prediction displays. In this way, the frontend becomes a key part of the business logic of the application, not just a presentation layer.

On the other hand, the implementation of linear regression represents an example of a practical and explainable application of artificial intelligence, where the goal is for the system to provide informative decision support rather than to replace decision-making.

Thus, this project stands out as a comprehensive software solution in which the frontend, backend, database, and predictive model are equally important and interconnected parts of a single system, rather than isolated technical exercises.

## 11. Application Testing

During development, the Clojure REPL was used, enabling interactive function testing, incremental development, and rapid validation of business logic. This approach proved particularly useful during the development of block volume and mass calculation functionalities, price calculations, and prediction-related logic.

In addition to manual testing through application usage from the end-user perspective, automated unit tests were implemented using the clojure.test library. Tests are organized in a separate test directory and cover key parts of the system’s business logic, including:
- block volume and mass calculations,
- determination of block class and category, including edge cases,
- calculation of individual block prices and total revenue,
- working with dates and time periods.

During testing, particular attention was given to boundary values and expected system behavior in different scenarios, ensuring greater reliability and stability of the application.

## 12. Conclusion

Working on this project enabled me to gain knowledge in the Clojure programming language and to practically apply software engineering principles in the development of a real system. A particularly valuable experience was the application of simple AI methods in a concrete business context, where technology has a direct impact on decision-making.

The project is personally significant to me because it emerged from a real need and has potential for further development and practical application. In the future, the system could be enhanced by adding user authentication, support for multiple user roles, more advanced reports and visual dashboards, as well as expanded analytical and predictive functionalities.