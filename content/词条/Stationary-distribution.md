---
title: "平稳分布（Stationary distribution）"
aliases: ["平稳分布", "Stationary distribution", "不变分布", "Invariant distribution", "细致平衡", "Detailed balance", "可逆Markov链", "Reversible Markov chain"]
type: concept
tags: [probability, stochastic-processes]
draft: false
publish: true
status: needs-review
verified: false
---



平稳分布是转移后保持不变的概率测度。它决定平稳运行时的状态比例，但存在平稳分布不意味着从任意初态逐时收敛。[^1][^2]

## 定义

对[转移核（Transition kernel）](Transition-kernel.md) $P$，概率测度 $\pi$ 满足 $\pi P=\pi$ 时称平稳分布或不变分布（invariant distribution）。在可数状态空间上即
$$
\pi(y)=\sum_x\pi(x)p(x,y),\qquad \pi(x)\ge0,\quad\sum_x\pi(x)=1.
$$
非负测度 $\mu P=\mu$ 称不变测度，允许总质量无穷。连续时间要求 $\pi P_t=\pi$ 对每个 $t\ge0$ 成立。若 $X_0\sim\pi$，则齐次 Markov 过程的有限维分布在时间平移下不变，即为[严格平稳过程（Strictly stationary process）](Stationary-process.md)。

## 周期访问构造

对常返状态 $a$，令 $T_a^+$ 为首次正返回，定义
$$
\mu_a(y)=\mathbb E_a\sum_{n=0}^{T_a^+-1}1_{\{X_n=y\}}.
$$
则 $\mu_a$ 是不变测度，$\mu_a(a)=1$，总质量为 $\mathbb E_aT_a^+$。若该期望有限，可归一化得到平稳分布。[^1]

> [!proof]- 周期构造的证明
> 由 $\{n<T_a^+\}\in\mathcal F_n$ 及 Markov 性，
> $$
> \begin{aligned}
> \sum_x\mu_a(x)p(x,y)
> &=\mathbb E_a\sum_{n=0}^{T_a^+-1}p(X_n,y)\\
> &=\mathbb E_a\sum_{n=0}^{T_a^+-1}1_{\{X_{n+1}=y\}}
> =\mathbb E_a\sum_{n=1}^{T_a^+}1_{\{X_n=y\}}.
> \end{aligned}
> $$
> 末项与 $\mu_a(y)$ 的差为 $\mathbb E_a[1_{\{X_{T_a^+}=y\}}-1_{\{X_0=y\}}]=0$，因为两端都等于 $a$。非负和可用 Tonelli 定理交换。

不可约可数链存在平稳分布当且仅当正常返；存在时唯一，且 $\pi(x)=1/\mathbb E_xT_x^+$。这个存在唯一性分类使用常返类的结构，完整论证见 Durrett Theorems 5.5.7、5.5.9、5.5.11–5.5.12。

## 细致平衡与可逆性

若概率向量 $\pi$ 满足细致平衡（detailed balance）$\pi(x)p(x,y)=\pi(y)p(y,x)$，则对 $x$ 求和得到 $\pi P=\pi$。此时从 $\pi$ 出发的链在有限时间段上与倒序路径同分布，称相对于 $\pi$ 可逆（reversible）。把路径概率中的每一项用细致平衡替换即可验证倒序等式。

**注**：细致平衡是平稳性的充分条件而非必要条件；三状态单向循环具有均匀平稳分布，但不满足细致平衡。平稳分布与长期极限的关系见[Markov 链的收敛（Convergence of Markov chains）](Markov-chain-convergence.md)。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Rick Durrett, *Probability: Theory and Examples*, Version 5, January 11, 2019，第 299–300 页；Theorems 5.5.5、5.5.7、5.5.9、5.5.11–5.5.12。

[^2]: Chen Wang, *Lecture Notes on Stochastic Processes*，个人笔记，Definition 3.51；式 (3.17)；Theorems 3.57、3.60、3.63、3.73。


