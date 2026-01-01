import numpy as np

def optimize_portfolio(returns, risk_tolerance):
    mean_returns = np.mean(returns, axis=0)
    cov_matrix = np.cov(returns, rowvar=False)

    inv_cov = np.linalg.pinv(cov_matrix)
    weights = inv_cov @ mean_returns
    weights = weights / np.sum(weights)

    adjusted = weights * (1 - risk_tolerance)
    return adjusted.tolist()
