export type VoteStrategy = "lowest_hp" | "most_active" | "random_alive";
export type ChatStrategy = "phase_aware" | "silent";
export type AutoPlayConfig = {
    roomId: string;
    voteStrategy: VoteStrategy;
    chatStrategy: ChatStrategy;
    chatFrequency: number;
    settleEnabled: boolean;
    pollIntervalMs: number;
    maxRounds: number;
};
export type ChatMessage = {
    round: number;
    sender: string;
    content: string;
    timestamp: number;
    txHash?: string;
};
export type VoteRecord = {
    round: number;
    target: string;
    timestamp: number;
    txHash?: string;
};
export type AutoPlayStatus = {
    running: boolean;
    roomId: string;
    round: number;
    phase: number;
    phaseName: string;
    humanityScore: number;
    isAlive: boolean;
    votesThisGame: number;
    messagesThisGame: number;
    settlesThisGame: number;
    chatHistory: ChatMessage[];
    voteHistory: VoteRecord[];
    errors: string[];
    startedAt: number;
    lastTickAt: number;
};
export type PlayerState = {
    address: string;
    name: string;
    humanityScore: number;
    isAlive: boolean;
    isAI: boolean;
    actionCount: number;
    successfulVotes: number;
};
export type RoomState = {
    id: string;
    phase: number;
    phaseName: string;
    entryFee: bigint;
    prizePool: bigint;
    maxPlayers: number;
    playerCount: number;
    aliveCount: number;
    isActive: boolean;
    isEnded: boolean;
    currentInterval: number;
    lastSettleBlock: number;
    startBlock: number;
};
export declare const PHASE_NAMES: readonly ["Waiting", "Active", "Ended"];
export declare const DEFAULT_CONFIG: Omit<AutoPlayConfig, "roomId">;
