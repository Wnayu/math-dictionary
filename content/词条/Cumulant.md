---
title: "累积量（Cumulant）"
aliases: ["累积量", "Cumulant", "累积量生成函数", "Cumulant generating function"]
type: concept
tags: [probability]
draft: false
publish: true
status: needs-review
verified: false
---



累积量把独立求和的乘法关系变成加法关系，二阶累积量就是方差，更高阶项用于描述偏离高斯分布的形状。[^1]

## 定义

若实值 $X$ 的[矩母函数（Moment-generating function）](Moment-generating-function.md)在零附近有限，定义累积量生成函数
$$
K_X(t)=\log\mathbb Ee^{tX},\qquad \kappa_r(X)=K_X^{(r)}(0).
$$
若只有 $r$ 阶绝对矩有限，也可在 $0$ 附近选取满足 $\log\varphi_X(0)=0$ 的连续对数，并以 $\kappa_j=i^{-j}(\log\varphi_X)^{(j)}(0)$ 定义 $j\le r$ 的累积量。因特征函数在零附近非零，该局部分支存在；这里不要求它在整个实轴都有对数。

## 低阶公式

记 $\mu=\mathbb EX$，则
$$
\kappa_1=\mu,\qquad \kappa_2=\mathbb E(X-\mu)^2,\qquad
\kappa_3=\mathbb E(X-\mu)^3,
$$
$$
\kappa_4=\mathbb E(X-\mu)^4-3\bigl(\mathbb E(X-\mu)^2\bigr)^2.
$$
每条公式均要求相应绝对矩有限，不能把不存在的高阶矩当作零。

> [!proof]- 证明
> 对中心化变量，写 $M(t)=1+m_2t^2/2+m_3t^3/6+m_4t^4/24+o(t^4)$。用 $\log(1+u)=u-u^2/2+o(u^2)$ 得
> $$
> \log M(t)=\frac{m_2t^2}2+\frac{m_3t^3}6+\frac{(m_4-3m_2^2)t^4}{24}+o(t^4).
> $$
> 非中心化时 $K_X(t)=\mu t+K_{X-\mu}(t)$，由此得到所列公式。只有有限四阶矩时，改用特征函数的有限阶 Taylor 展开，推导相同。

## 独立求和与高斯分布

独立的 $X,Y$ 满足 $K_{X+Y}=K_X+K_Y$，因而所有已定义阶数有 $\kappa_r(X+Y)=\kappa_r(X)+\kappa_r(Y)$。同时 $\kappa_r(aX)=a^r\kappa_r(X)$；平移仅改变一阶累积量。

对 $N(\mu,\sigma^2)$，$K(t)=\mu t+\sigma^2t^2/2$，故三阶及以上累积量为零。对标准化独立同分布和，$r$ 阶累积量按 $n^{1-r/2}$ 缩放；这解释了 [Edgeworth 展开（Edgeworth expansion）](Edgeworth-expansion.md)中三阶修正的来源，但要得到有误差控制的分布展开，还需额外平滑或非格点条件。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Bing-Yi Jing, Advanced Probability Theory, 讲义, July 2012. §§11.4.3、11.6.3。
