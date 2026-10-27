---
title: "概率论（Probability theory）"
aliases: ["概率论", "Probability", "Probability theory"]
type: "concept"
tags: ["probability"]
draft: false
publish: true
status: "needs-review"
verified: false
---



概率论研究随机现象的分布、依赖关系和极限规律，并通过随机过程描述随时间演化的不确定性。本专题以可测空间和积分为基础，继续讨论随机积分与随机微分方程。[^1][^2]

## 概率空间与随机变量

[概率空间（Probability space）](Probability-measure.md)把事件组织为 σ-代数并赋予总质量为 $1$ 的测度；[随机变量（Random variable）](Random-variable.md)是从这个空间出发的可测映射。[分布（Law of a random variable）](Law-of-a-random-variable.md)记录取值的概率，[期望与矩（Expectation and moments）](Expectation.md)通过积分刻画数量特征。联合信息由[随机向量（Random vector）](Random-vector.md)、[独立性（Independence）](Independence.md)及[条件期望（Conditional expectation）](Conditional-expectation.md)描述。

## 极限与收敛

[随机变量的收敛（Convergence of random variables）](Convergence-of-random-variables.md)区分几乎必然、依概率、Lp 和依分布收敛；结论中的收敛方式不可省略。[大数定律（Strong law of large numbers）](Strong-law-of-large-numbers.md)讨论平均值，[中心极限定理（Central limit theorem）](Central-limit-theorem.md)讨论中心化和的波动尺度。[特征函数（Characteristic function）](Characteristic-function.md)、[紧性（Tightness）](Tightness.md)和[一致可积性（Uniform integrability）](Uniform-integrability.md)分别提供分布、子列与积分的控制。

## 过程、条件信息与动态结构

[滤过（Filtration）](Filtration.md)规定随时间可用的信息；[鞅（Martingale）](Martingale.md)表示相对于该信息的条件均值守恒。[Markov 过程（Markov process）](Markov-process.md)用当前状态确定未来的条件规律。连续噪声以[Brownian 运动（Brownian motion）](Brownian-motion.md)为基本例，独立平稳增量及跳跃由[Lévy 过程（Lévy process）](Levy-process.md)统一描述。

## 随机积分与方程

[随机积分（Stochastic integral）](Stochastic-integral.md)必须说明积分器、被积过程的可测性与可积性。[Itô 公式（Itô formula）](Ito-formula.md)中的二阶项来自二次变差；跳跃时还需[带跳修正（Itô formula with jumps）](Jump-Ito-formula.md)。[随机微分方程（Stochastic differential equation）](Stochastic-differential-equation.md)的存在、强弱解和不同唯一性概念由各专门词条详细说明。[Lévy 噪声驱动方程（Lévy-driven stochastic differential equation）](Levy-driven-SDE.md)进一步包括补偿小跳与有限大跳。

## 阅读入口

按主题逐层阅读可使用[概率论导航](../概率论导航.md)。测度、积分及函数空间的共同基础沿用[测度论导航](../测度论导航.md)，不因进入概率论而重新定义同一个对象。详细来源与章节对应见[概率论范围与来源](../概率论范围与来源.md)。


对正概率事件的条件化与 Bayes 公式见[条件概率（Conditional probability）](Conditional-probability.md)；对零概率取值的条件化则使用正则条件分布。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Rick Durrett, Probability: Theory and Examples, Version 5, January 11, 2019. 全书的概率论组织结构。

[^2]: Jean-François Le Gall, Brownian Motion, Martingales, and Stochastic Calculus, Graduate Texts in Mathematics 274, Springer, 2016；David Applebaum, Lévy Processes and Stochastic Calculus, 2nd ed., Cambridge Studies in Advanced Mathematics 116, Cambridge University Press, 2009. 概率过程与随机分析部分。
