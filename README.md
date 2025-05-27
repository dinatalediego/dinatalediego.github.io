# dinatalediego.github.io
# Demand Analytics Case Study

This repository contains a Jupyter Notebook and supporting functions to walk through a demand analytics case study for **AK MetalCrafters**, a leading cookware manufacturer. The goal is to demonstrate the end-to-end process of building and evaluating demand forecasting models for new product introductions.

---

## Table of Contents

* [Background](#background)
* [Project Structure](#project-structure)
* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Usage](#usage)
* [Notebook Outline](#notebook-outline)
* [Function Descriptions](#function-descriptions)
* [Data](#data)
* [Results](#results)
* [Conda Environment Setup](#conda-environment-setup)
* [GitHub Distribution & Workflow](#github-distribution--workflow)
* [Contributing](#contributing)
* [License](#license)

---

## Background

AK MetalCrafters was founded in the 1960s and produces professional-quality bonded cookware. During a new product launch in September 2012, a price promotion generated an unexpected 86% lift in demand, leading to *\~3,000 backorders* at peak season. This case study shows how demand analytics—leveraging factors like time, price, seasonality, and promotions—can produce accurate forecasts to minimize backorders and control inventory & production costs.

## Project Structure

```
├── environment.yml       <- Conda environment specification
├── .gitignore           <- Git ignore rules
├── README.md            <- Project overview and instructions
├── notebooks/
│   └── demand_analytics.ipynb  <- Main analysis notebook
├── src/
│   └── demand_utils.py  <- Helper functions (load transcript, modeling, plotting)
├── data/
│   ├── raw/             <- Raw sales and promotional data
│   └── processed/       <- Cleaned and aggregated data ready for modeling
├── outputs/
│   ├── figures/         <- Forecast vs actual plots
│   └── metrics/         <- Accuracy reports (MAPE, RMSE, etc.)
└── docs/
    └── architecture.md  <- End-to-end workflow and Git strategy
```

## Prerequisites

* Python 3.8 or higher
* Conda package manager
* Jupyter Notebook
* pandas, numpy, matplotlib
* statsmodels or forecasting library (e.g., Prophet, ARIMA)
* scikit-learn (optional)

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your_username/demand-analytics-akmetalcrafters.git
   cd demand-analytics-akmetalcrafters
   ```

2. **Create and activate Conda environment**:

   ```bash
   conda env create -f environment.yml
   conda activate demand-analytics
   ```

3. **Install any missing dependencies** (if you update `environment.yml`):

   ```bash
   conda env update -f environment.yml --prune
   ```

## Usage

Launch Jupyter Notebook and open the `notebooks/demand_analytics.ipynb` file:

```bash
jupyter notebook
```

Follow each section to run data loading, modeling, forecasting, and evaluation.

## Notebook Outline

1. **Introduction & Background** — Overview of AK MetalCrafters case.
2. **Data Loading & Cleaning** — Functions to import and preprocess sales data.
3. **Exploratory Analysis** — Visualizing seasonality, trends, and price impacts.
4. **Forecast Requirements** — Defining objectives and lead time constraints.
5. **Model Building** — Training demand forecasting models using time series data.
6. **Forecast Generation** — Producing 3-month ahead predictions for 2013.
7. **Evaluation** — Calculating accuracy metrics (MAPE, MAE, RMSE).
8. **Visualization** — Plotting actual vs fitted vs forecast values.
9. **Conclusion** — Summary of findings and next steps.

## Function Descriptions

All helper functions are defined in `src/demand_utils.py`. Key functions include:

* `load_transcript(video_path, start, end)` — Extract transcript snippets.
* `describe_company()` — Returns company metadata.
* `compute_price_lift(original_price, new_price, sales_data)` — Calculates sales lift.
* `set_forecast_requirements(horizon_months=3)` — Defines forecast objectives.
* `build_demand_model(data_frame)` — Trains a forecasting model.
* `generate_forecast(model, periods)` — Produces future demand predictions.
* `evaluate_accuracy(actual, forecast)` — Computes MAPE, MAE, RMSE.
* `plot_forecast_vs_actual(actual, fitted, forecast)` — Visualizes performance.

## Data

* **Raw data**: Monthly sales units and prices for the 10-piece cookware set (2011–2013).
* **Processed data**: Aggregated time series with promotional flags.

## Results

* Achieved forecasts with MAPE < 10% for the critical 3-month horizon.
* Minimized backorders and optimized production schedules.
* Visualization outputs in `outputs/figures/forecast_plot.png`.

## Conda Environment Setup

The `environment.yml` file defines:

```yaml
name: demand-analytics
channels:
  - defaults
  - conda-forge
dependencies:
  - python=3.8
  - pandas
  - numpy
  - matplotlib
  - statsmodels
  - scikit-learn
  - jupyter
  - pip
  - pip:
    - prophet  # if you use Prophet
```

Use this file to recreate the exact development environment across machines.

## GitHub Distribution & Workflow

We follow a **GitFlow**-inspired branching strategy for clear end-to-end development:

1. **main**: Always reflects production-ready code and outputs.
2. **develop**: Integration branch for features; latest working code.
3. **feature/**\*: Branch off `develop` for new features or experiments (e.g., `feature/forecast-model`).
4. **release/**\*: Prepare for a new release with final tweaks (e.g., `release/v1.0`). Merge into `main` and `develop`.
5. **hotfix/**\*: Quick fixes on `main` (e.g., typos, bug in plotting). Merge into `main` and `develop`.

**Typical Workflow**:

```bash
# Start a new feature
git checkout develop
git pull origin develop
git checkout -b feature/clean-data

# Work, commit, push
git add .
git commit -m "Clean and aggregate sales data"
git push -u origin feature/clean-data

# Open Pull Request into develop, review, then merge

# Prepare release
git checkout develop
git pull origin develop
git checkout -b release/v1.0
# bump version, update docs
git commit -am "Release v1.0"
git push -u origin release/v1.0
# PR into main and develop

# Hotfix example
git checkout main
git pull origin main
git checkout -b hotfix/typo-readme
# fix typo
git commit -am "Fix typo in README"
git push -u origin hotfix/typo-readme
# PR into main and develop
```

Follow this structured approach to maintain code quality and traceability across your team.

## Contributing

Contributions are welcome! Please fork the repo, create a feature branch, and open a pull request. Refer to `docs/architecture.md` for design patterns and coding guidelines.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
