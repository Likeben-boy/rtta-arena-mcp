// ============ 常量定义 ============
// 游戏阶段名称映射表
export const PHASE_NAMES = ["Waiting", "Active", "Ended"];
// 默认自动玩配置（不含 roomId，由调用时提供）
export const DEFAULT_CONFIG = {
    voteStrategy: "lowest_hp", // 默认投票给人性分最低的敌方
    chatStrategy: "phase_aware", // 默认使用阶段感知聊天策略
    chatFrequency: 0.3, // 每次 tick 有 30% 概率发送消息
    settleEnabled: true, // 启用自动结算
    pollIntervalMs: 10000, // 每 10 秒 tick 一次（降低 RPC 压力）
    maxRounds: 100, // 最多玩 100 轮（安全限制）
};
