---
title: "正则条件分布（Regular conditional distribution）"
aliases: ["正则条件分布", "Regular conditional distribution", "正则条件概率", "Regular conditional probability", "分解", "Disintegration"]
type: "concept"
tags: ["probability"]
draft: false
publish: true
status: "needs-review"
verified: false
---



逐个事件定义条件概率只给出各自的几乎必然版本。正则条件分布要求把这些版本组织成一个概率核，使同一个样本点对应一整个概率测度。

## 定义

设 $X:(\Omega,\mathcal F,P)\to(S,\mathcal S)$ 为随机元素，$\mathcal G\subseteq\mathcal F$。其正则条件分布是映射 $K:\Omega\times\mathcal S\to[0,1]$，满足：每个 $\omega$ 对应概率测度 $K(\omega,\cdot)$；对每个 $A\in\mathcal S$，$K(\cdot,A)$ 是 $\mathcal G$-可测，且
$$
\int_G K(\omega,A)P(d\omega)=P(G\cap\{X\in A\}),\qquad G\in\mathcal G.
$$
这等价于 $K(\cdot,A)$ 为 $\mathbb E[1_{\{X\in A\}}\mid\mathcal G]$ 的版本。概率核的两种可测性要求也见[转移核（Transition kernel）](Transition-kernel.md)。有的定义只要求几乎每个 $\omega$ 对应概率测度；在有可测共同例外集时可在其上指定一个固定概率测度。[^1]

## 存在性与版本

当 $(S,\mathcal S)$ 是非空[标准 Borel 空间（Standard Borel space）](Standard-Borel-space.md)时，正则条件分布存在。两个版本对几乎每个 $\omega$ 作为测度相同：先在可数决定类上取共同的零测集，再用测度唯一性推广。

> [!proof]- 实值情形的构造
> 对每个有理数 $q$ 选取 $G_q=\mathbb E[1_{\{X\le q\}}\mid\mathcal G]$。由条件期望的单调性和单调收敛，在删去一个可数并的零测集后，可同时保证 $q\mapsto G_q(\omega)$ 非降、在有理数趋于正负无穷时极限分别为 $1,0$，并具有所需的有理右极限。令 $F_\omega(x)=\inf_{q>x,q\in\mathbb Q}G_q(\omega)$。它是分布函数，故确定唯一概率测度 $K(\omega,\cdot)$。坏集上使用 $\delta_0$。对半直线，所构造的数值具有条件概率的积分恒等式；使该恒等式及 $\omega$ 的可测性成立的集合形成 λ-系，由[π–λ 定理（Pi–lambda theorem）](Pi-lambda-theorem.md)推广到所有 Borel 集。一般标准 Borel 情形经可测同构转移，必要时在共同零测集上修正。

## 给定随机变量的条件分布

若 $X,Y$ 的取值空间均为标准 Borel 空间，可选概率核 $K(y,A)$，使 $K(Y,A)=P(X\in A\mid\sigma(Y))$ 几乎必然。因此联合分布满足分解公式
$$
P(X\in A,Y\in B)=\int_B K(y,A)P_Y(dy).
$$
这称为关于 $Y$ 的分解（disintegration）。$K(y,\cdot)$ 只在 $P_Y$-几乎处处意义下唯一；写 $P(X\in A\mid Y=y)$ 隐含这一版本选择。

对非负可测 $g$ 或 $g(X)$ 可积时，$\mathbb E[g(X)\mid\mathcal G]=\int g(x)K(\cdot,dx)$。从指示函数开始，经简单函数和单调收敛即得；有符号可积情形再分正负部。

## 联合密度的例

若实向量 $(X,Y)$ 有联合密度 $f(x,y)$，$f_Y(y)=\int f(x,y)dx$，则在 $0<f_Y(y)<\infty$ 处可取 $K(y,A)=\int_A f(x,y)dx/f_Y(y)$。其余点可选择固定概率测度，因为这些点构成 $P_Y$-零测集。这个选择不能使零概率条件事件获得与版本无关的数值。

**注**：对任意可测空间，正则条件分布不保证存在；单个事件的条件期望总存在，不能据此直接断言可以对所有事件同时选出概率测度版本。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Rick Durrett, Probability: Theory and Examples, Version 5, January 11, 2019. §4.1.3，定理4.1.16–4.1.18。
