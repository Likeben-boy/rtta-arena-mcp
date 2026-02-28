import { ethers } from "ethers";
import type { AutoPlayConfig, AutoPlayStatus } from "./types.js";
import { ChatClient } from "./chatClient.js";
/**
 * GameLoop 类 - 自动玩游戏的后台循环
 *
 * 负责自动执行游戏操作：投票、聊天、结算轮次、领取奖励
 * 按照配置的轮询间隔定期执行 tick() 函数
 */
export declare class GameLoop {
    private config;
    private wallet;
    private provider;
    private arenaAddress;
    private chatClient;
    private intervalId;
    private ticking;
    private status;
    private recentErrors;
    private chatHistory;
    private voteHistory;
    private stopped;
    private log;
    private lastFetchChatAt;
    /**
     * 构造函数
     * @param config - 自动玩配置
     * @param wallet - 玩家钱包
     * @param arenaAddress - 竞技场合约地址
     * @param log - 可选的自定义日志函数
     */
    constructor(config: AutoPlayConfig, wallet: ethers.Wallet, arenaAddress: string, log?: (msg: string) => void, chatClient?: ChatClient | null);
    /**
     * 启动自动玩游戏循环
     * @returns 当前状态
     */
    start(): AutoPlayStatus;
    /**
     * 停止自动玩游戏循环
     * @returns 最终状态
     */
    stop(): AutoPlayStatus;
    /**
     * 获取当前状态
     * @returns 当前状态的副本（包含最近 10 个错误、完整聊天和投票历史）
     */
    getStatus(): AutoPlayStatus;
    /**
     * Tick 函数 - 每次轮询执行的核心逻辑
     *
     * 执行流程：
     * 1. 读取房间状态
     * 2. 验证玩家在房间内
     * 3. 游戏结束 → 领取奖励 → 停止
     * 4. pendingReveal → 等待
     * 5. 游戏未开始 → 等待
     * 6. 已淘汰 → 等待游戏结束
     * 7. 如果本轮未投票 → 投票
     * 8. 可能发送聊天消息
     * 9. 可能结算轮次
     * 10. 检查最大轮次数限制
     */
    private tick;
    /**
     * 尝试投票
     * @param contract - 合约实例
     * @param players - 所有玩家状态
     * @param myAddr - 自己的地址
     */
    private tryVote;
    /**
     * 尝试发送聊天消息（通过链下 REST API）
     */
    private tryChat;
    /**
     * 尝试结算轮次
     * @param contract - 合约实例
     * @param room - 房间状态
     */
    private trySettle;
    /**
     * 尝试领取奖励
     * @param contract - 合约实例
     */
    private tryClaim;
    /**
     * 拉取房间聊天记录（从链下 REST API）
     * 用于获取其他玩家的聊天消息，支持社交推理投票策略
     */
    private fetchRoomChat;
    /**
     * 解析房间信息
     * @param info - 合约返回的原始房间信息
     * @returns 解析后的房间状态
     */
    private parseRoomInfo;
    /**
     * 处理错误
     * @param err - 错误对象
     */
    private handleError;
}
