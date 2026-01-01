import numpy as np

def rebalance(portfolio, risk):
    weights = np.array([
        portfolio["stocks"],
        portfolio["bonds"],
        portfolio["cash"]
    ])
    target = np.array([0.6, 0.3, 0.1]) * (1 - risk)
    adjusted = (weights + target) / 2
    return {
        "stocks": float(adjusted[0]),
        "bonds": float(adjusted[1]),
        "cash": float(adjusted[2])
    }

