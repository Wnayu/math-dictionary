---
title: "滤过（Filtration）"
aliases: ["滤过", "Filtration", "自然滤过", "Natural filtration", "适应过程", "Adapted process", "通常条件", "Usual conditions"]
type: concept
tags: [probability, stochastic-processes]
draft: false
publish: true
status: needs-review
verified: false
---



滤过用递增的事件信息描述观察如何随时间积累，是鞅、停时和随机积分的共同基础。[^L][^N]

## 定义

在概率空间 $(\Omega,\mathcal F,P)$ 上，子 $\sigma$-代数族 $(\mathcal F_t)_{t\in T}$ 满足 $s\le t\Rightarrow\mathcal F_s\subseteq\mathcal F_t$ 时称滤过，其中 $T=\mathbb N_0$ 或 $[0,\infty)$。四元组 $(\Omega,\mathcal F,(\mathcal F_t),P)$ 称滤过概率空间（filtered probability space）。

[随机过程（Stochastic process）](Stochastic-process.md) $X$ 适应（adapted）于该滤过，指每个 $X_t$ 都是 $\mathcal F_t$-可测。其自然滤过（natural filtration）为
$$
\mathcal F_t^X=\sigma(X_s:0\le s\le t).
$$
它是使 $X$ 适应的最小滤过。这里 $\sigma(\cdot)$ 表示[生成的 σ-代数（Generated sigma-algebra）](Generated-sigma-algebra.md)。

## 通常条件

连续时间中记 $\mathcal F_{t+}=\bigcap_{s>t}\mathcal F_s$。若 $\mathcal F_t=\mathcal F_{t+}$，称滤过右连续。若 $\mathcal F_0$ 包含环境 $\mathcal F$ 中所有零测集的所有子集，称滤过完备。完备且右连续称满足通常条件（usual conditions）；若采用终端 $\sigma$-代数 $\mathcal F_\infty$ 作为环境，应相对于它解释完备性。

通常增广可以先加入零集，再取右极限：令 $\mathcal N$ 为环境零集的所有子集，取
$$
\overline{\mathcal F}_t=\bigcap_{s>t}\sigma(\mathcal F_s,\mathcal N).
$$
同时把概率测度扩张到完备化后的环境空间。

**注**：增大滤过会改变[鞅（Martingale）](Martingale.md)、独立增量和 Markov 性是否成立，不能在证明中任意加入未来信息。例如 Brownian 自然滤过中加入 $B_1$ 后，对 $t<1$ 不能再把 $B_1-B_t$ 当作独立于当前信息。

## 与可预测性的关系

离散时间的可预测序列要求 $H_n$ 对 $\mathcal F_{n-1}$ 可测，严格早于“适应”要求的 $\mathcal F_n$。连续时间还需使用[可预测过程与渐进可测过程（Predictable and progressively measurable processes）](Predictable-process.md)的乘积可测结构；仅适应不足以直接定义所有随机积分。

[概率论导航](../概率论导航.md)

## 参考文献

[^L]: Jean-François Le Gall, Brownian Motion, Martingales, and Stochastic Calculus, Graduate Texts in Mathematics 274, Springer, 2016. §3.1。

[^N]: Chen Wang, Lecture Notes on Stochastic Processes，个人笔记。 第2章，Definition and Examples of Martingales。
