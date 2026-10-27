---
title: "Prohorov 定理（Prohorov theorem）"
aliases: ["Prohorov 定理", "Prohorov theorem"]
type: theorem
tags: [probability]
draft: false
publish: true
status: needs-review
verified: false
---



Prohorov 定理把概率分布的紧性与弱收敛子列的存在联系起来。本卡给出所引概率讲义明确陈述的实直线版本。[^1]

## 实直线上的定理

实轴上的概率测度族 $\mathcal P$ [紧（Tight）](Tightness.md)，当且仅当从 $\mathcal P$ 中选出的任意序列都有弱收敛到一个概率测度的子列。这里的“相对序列紧”允许极限不在原族内。

> [!proof]- 证明
> 先假设紧。[^2]对分布函数 $F_n$，在可数稠密的有理数集上逐点抽取对角子列，使每个 $r\in\mathbb Q$ 都有 $F_{n_k}(r)\to G(r)$。$G$ 在有理数上非降，定义
> $$
> F(x)=\inf_{r\in\mathbb Q,\,r>x}G(r).
> $$
> 则 $F$ 非降右连续；而 $\sup_{r\in\mathbb Q,r<x}G(r)=F(x-)$。对有理数 $r<x<s$，用 $F_{n_k}(r)\le F_{n_k}(x)\le F_{n_k}(s)$ 夹逼，在 $F(x-)=F(x)$ 的点得到 $F_{n_k}(x)\to F(x)$。这就是此处的 Helly 选择论证。
>
> 任取 $\varepsilon>0$，紧性给出 $R$ 使全部 $\mu_n([-R,R])\ge1-\varepsilon$，于是 $r<-R$ 时 $G(r)\le\varepsilon$，$r>R$ 时 $G(r)\ge1-\varepsilon$。令 $\varepsilon\downarrow0$ 即得 $F(-\infty)=0$、$F(+\infty)=1$。故 $F$ 是概率分布函数，按分布函数判据得到子列弱收敛。
>
> 反之，若族不紧，则存在 $\varepsilon>0$ 和 $\mu_n\in\mathcal P$，使 $\mu_n([-n,n]^c)>\varepsilon$。任何弱收敛子列都应为紧序列；对该子列选择固定紧区间容纳质量大于 $1-\varepsilon$，会与 $n\to\infty$ 时的上述尾部下界矛盾。

## 识别全列极限

证明 $\mu_n\Rightarrow\mu$ 常分两步：先证明紧性，确保每个子列可继续抽取弱收敛子列；再证明任一可能极限都是同一个 $\mu$。若全列不收敛，就存在某个有界连续测试函数及一个子列，其积分始终离目标积分至少固定正数，和第二步矛盾。

**注**：不能从这个实直线版本直接把底空间换成任意可测空间。更一般空间的定理需要拓扑和空间正则性假设；本条不把未陈述的广义版本作为现成结论。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Terence Tao, *275A, Notes 4: The central limit theorem*, 2015，Theorem 11。

[^2]: Rick Durrett, *Probability: Theory and Examples*, Version 5, January 11, 2019，Theorems 3.2.12–3.2.14。
