import type { PlayerState, VoteStrategy } from "./types.js";
/**
 * 根据指定策略选择投票目标
 *
 * Commit-reveal 方案下，游戏中无法知道其他玩家的真实身份（isAI 始终为 false）。
 * 因此投票策略改为纯社交推理 — 从所有存活非自己玩家中选择目标。
 *
 * @param players - 所有玩家状态列表
 * @param selfAddress - 自己的地址
 * @param strategy - 投票策略
 * @returns 投票目标地址，如果没有可选目标则返回 null
 */
export declare function pickVoteTarget(players: PlayerState[], selfAddress: string, strategy: VoteStrategy): string | null;
/**
 * 从消息池中随机选择一条聊天消息
 * @returns 随机聊天消息
 */
export declare function pickChatMessage(): string;
/**
 * 生成随机延迟时间（毫秒）
 * @param minMs - 最小延迟（毫秒）
 * @param maxMs - 最大延迟（毫秒）
 * @returns 随机延迟时间（毫秒）
 */
export declare function randomDelay(minMs: number, maxMs: number): number;
/**
 * 异步等待函数
 * @param ms - 等待时间（毫秒）
 * @returns Promise，在指定时间后 resolve
 */
export declare function sleep(ms: number): Promise<void>;
