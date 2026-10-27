---
title: "局部时（Local time）"
aliases:
  - "局部时"
  - "Local time"
  - "Right local time"
  - "右局部时"
  - "Symmetric local time"
  - "对称局部时"
type: concept
tags:
  - probability
  - stochastic-calculus
draft: false
publish: true
status: needs-review
verified: false
---



局部时把连续半鞅在某个水平附近积累的二次变差，表示为空间变量上的密度。它不是单纯的“在某一点停留多久”。

## 定义

设 $X$ 为实值连续[半鞅（semimartingale）](Semimartingale.md)。本库采用 Le Gall 的右局部时约定。对 $a\in\mathbb R$，定义
$$
L_t^a(X)=|X_t-a|-|X_0-a|-\int_0^t\operatorname{sgn}_{-}(X_s-a)\,dX_s,
$$
其中 $\operatorname{sgn}_{-}(x)=\mathbf1_{\{x>0\}}-\mathbf1_{\{x\le0\}}$，尤其 $\operatorname{sgn}_{-}(0)=-1$。[Tanaka 公式（Tanaka formula）](Tanaka-formula.md)保证 $t\mapsto L_t^a$ 连续、适应、非负递增且从零出发。可取其关于水平 $a$ 右连续有左极限的版本。[^1]

相应的空间密度性质为
$$
\int_0^t g(X_s)\,d[X]_s=\int_{\mathbb R}g(a)L_t^a(X)\,da
$$
对非负 Borel $g$ 成立，详见[占用密度公式（Occupation density formula）](Occupation-density-formula.md)。特别地，
$$
L_t^a(X)=\lim_{\varepsilon\downarrow0}\frac1\varepsilon\int_0^t\mathbf1_{[a,a+\varepsilon]}(X_s)\,d[X]_s
$$
在所选版本下几乎必然成立。[^1]

## 右局部时与对称局部时

对称局部时定义为 $\widetilde L_t^a=(L_t^a+L_t^{a-})/2$，对应对称窗口 $[a-\varepsilon,a+\varepsilon]$ 的 $1/(2\varepsilon)$ 归一化。一般连续半鞅的两种局部时可能不同；改变约定时必须同时改变 Tanaka 公式中的符号函数在零点的取值。

Brownian 运动的局部时可以选为 $(t,a)$ 联合连续，因此两种约定一致。对标准 $B$，$[B]_t=t$，局部时才直接成为通常时间占用测度的密度。[^1]

## 增长的位置

对固定 $a$，随机 Stieltjes 测度 $d_tL_t^a$ 支持在 $\{t:X_t=a\}$：过程远离 $a$ 的开区间上，绝对值函数局部光滑，普通 Itô 公式与定义比较给出局部时不变。

**注**：$\int_0^t\mathbf1_{\{B_s=a\}}ds=0$ 几乎必然，并不意味着 $L_t^a(B)=0$。单点停留时间为零与邻域占用密度为正是不同的陈述。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Jean-François Le Gall，*Brownian Motion, Martingales, and Stochastic Calculus*，Graduate Texts in Mathematics 274，Springer，2016，式 (9.5)；Propositions 9.3、9.9、Theorems 9.4、9.12。
