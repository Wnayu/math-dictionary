---
title: "常用概率分布（Common probability distributions）"
aliases: ["常用概率分布", "Common probability distributions", "Bernoulli分布", "Bernoulli distribution", "Poisson分布", "Poisson distribution", "均匀分布", "Uniform distribution", "二项分布", "Binomial distribution", "几何分布", "Geometric distribution", "指数分布", "Exponential distribution", "Gamma分布", "Gamma distribution", "Beta分布", "Beta distribution", "正态分布", "Normal distribution", "Cauchy分布", "Cauchy distribution"]
type: "concept"
tags: ["probability"]
draft: false
publish: true
status: "needs-review"
verified: false
---



本条固定常用分布的参数和取值范围，供其他概率词条直接引用。质量函数对应离散取值，密度则总是相对于指定参考测度；二者不能混写。一般分布与密度的关系见[随机变量的分布（Law of a random variable）](Law-of-a-random-variable.md)。[^1]

## 离散分布

### Bernoulli 分布

参数 $p\in[0,1]$，质量函数为 $P(X=1)=p$、$P(X=0)=1-p$。均值为 $p$，方差为 $p(1-p)$。

### 二项分布（Binomial distribution）

参数为非负整数 $n$ 和 $p\in[0,1]$，
$$
P(X=k)=\binom nkp^k(1-p)^{n-k},\qquad k=0,\ldots,n.
$$
均值为 $np$，方差为 $np(1-p)$。

### Poisson 分布

参数 $\lambda>0$，
$$
P(X=k)=e^{-\lambda}\frac{\lambda^k}{k!},\qquad k=0,1,\ldots.
$$
均值和方差均为 $\lambda$。

### 几何分布（Geometric distribution）

参数 $p\in(0,1]$，质量函数为 $P(X=k)=(1-p)^{k-1}p$，$k=1,2,\ldots$。均值为 $1/p$，方差为 $(1-p)/p^2$。

二项系数 $\binom nk=n!/[k!(n-k)!]$；$n!=1\cdot2\cdots n$，$0!=1$。边界参数 $p=0,1$ 按相应退化分布解释，避免在公式中依赖未说明的 $0^0$。Poisson 参数 $\lambda=0$ 时也定义为恒等于零的分布。

公平 Bernoulli 变量指 $p=1/2$。[^2]二项变量可实现为 $n$ 个独立 Bernoulli 变量之和。这里几何变量计数“首次成功所需试验次数”；若改计成功前失败次数，应使用 $X-1$，其支集从 $0$ 开始，均值也相应改变。

## 具有密度的分布

以下密度均相对于实轴的 Lebesgue 测度，显示区间之外取零。

### 均匀分布（Uniform distribution）

参数 $a<b$，密度为 $f(x)=1/(b-a)$（$a<x<b$）。均值为 $(a+b)/2$，方差为 $(b-a)^2/12$。

### 指数分布（Exponential distribution）

速率参数 $\lambda>0$，密度为 $f(x)=\lambda e^{-\lambda x}$（$x>0$）。均值为 $1/\lambda$，方差为 $1/\lambda^2$。

### Gamma 分布

形状参数 $\alpha>0$、速率参数 $\beta>0$，
$$
f(x)=\frac{\beta^\alpha}{\Gamma(\alpha)}x^{\alpha-1}e^{-\beta x},\qquad x>0.
$$
均值为 $\alpha/\beta$，方差为 $\alpha/\beta^2$。

### Beta 分布

参数 $\alpha,\beta>0$，
$$
f(x)=\frac{x^{\alpha-1}(1-x)^{\beta-1}}{B(\alpha,\beta)},\qquad 0<x<1.
$$
均值为 $\alpha/(\alpha+\beta)$，方差为 $\alpha\beta/[(\alpha+\beta)^2(\alpha+\beta+1)]$。

### 正态分布（Normal distribution）

位置参数 $m\in\mathbb R$、标准差 $\sigma>0$，
$$
f(x)=\frac{1}{\sqrt{2\pi\sigma^2}}\exp\left(-\frac{(x-m)^2}{2\sigma^2}\right),\qquad x\in\mathbb R.
$$
均值为 $m$，方差为 $\sigma^2$，记为 $N(m,\sigma^2)$。

### Cauchy 分布

位置参数 $a\in\mathbb R$、尺度参数 $\gamma>0$，
$$
f(x)=\frac{\gamma}{\pi((x-a)^2+\gamma^2)},\qquad x\in\mathbb R.
$$
均值未定义，二阶矩为无穷。下面给出一阶不可积的计算。

归一化常数为 $\Gamma(r)=\int_0^\infty t^{r-1}e^{-t}dt$（$r>0$），$B(r,s)=\int_0^1t^{r-1}(1-t)^{s-1}dt=\Gamma(r)\Gamma(s)/\Gamma(r+s)$。本条 Gamma 第二参数是速率；尺度参数等于其倒数。一般正态分布记为 $N(m,\sigma^2)$，标准形式是 $N(0,1)$，一般高斯向量和退化协方差见[高斯过程（Gaussian process）](Gaussian-process.md)。

区间端点是否包含不影响均匀分布；其测度定义为 $P_X(B)=m(B\cap[a,b])/(b-a)$。有限集合上的均匀概率仍按集合大小归一化，见[概率测度（Probability measure）](Probability-measure.md)。

## 矩的计算与存在性

> [!proof]- Poisson 与 Gamma 的矩
> 对 Poisson 变量，$EX=\sum_{k\ge1}k e^{-\lambda}\lambda^k/k!=\lambda$，同理 $E[X(X-1)]=\lambda^2$，故 $EX^2=\lambda^2+\lambda$，方差为 $\lambda$。对 Gamma 变量，积分换元 $y=\beta x$ 给 $EX^r=\beta^{-r}\Gamma(\alpha+r)/\Gamma(\alpha)$，适用于 $r> -\alpha$；取 $r=1,2$ 并用 $\Gamma(a+1)=a\Gamma(a)$ 得上列均值和方差。

标准 Cauchy 密度为 $1/(\pi(1+x^2))$。其正半轴一阶积分 $\int_0^R x/\{\pi(1+x^2)\}dx=\log(1+R^2)/(2\pi)$ 趋于无穷，负半轴亦然，所以对称性不能把[期望（Expectation）](Expectation.md)定义为零。

## 分布与过程

Poisson 分布描述一个计数变量，[Poisson 过程（Poisson process）](Poisson-process.md)还要指定不同时间之间的联合规律。正态边缘分布也不自动使一个过程成为高斯过程；高斯性要求所有有限线性组合都为正态。

[概率论导航](../概率论导航.md)

## 参考文献

[^2]: Chen Wang, Notes on Lévy Processes and Stochastic Calculus，个人笔记，附录 Review of measure and probability；原分布词条中的Bernoulli、Poisson和均匀分布说明迁入本条。

[^1]: Rick Durrett, Probability: Theory and Examples, Version 5, January 11, 2019. §§1.2、2.1、3.3、3.7中常用分布；Bing-Yi Jing, Advanced Probability Theory, lecture notes, July 2012, §§2.10、10.1。参数约定、Beta/Gamma归一化及矩计算在本条明示。
