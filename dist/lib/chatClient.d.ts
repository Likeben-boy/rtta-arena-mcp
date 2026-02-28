import { ethers } from "ethers";
/**
 * ChatClient — REST client for the chat-server.
 * Used by MCP adapter to send and retrieve chat messages off-chain.
 */
export declare class ChatClient {
    private baseUrl;
    private token;
    private wallet;
    constructor(baseUrl: string, wallet: ethers.Wallet);
    /**
     * Authenticate with the chat server using SIWE-style signature.
     */
    authenticate(): Promise<void>;
    /**
     * Ensure we have a valid token, authenticating if needed.
     */
    private ensureAuth;
    /**
     * Send a chat message to a room via REST API.
     */
    sendMessage(roomId: number, content: string): Promise<void>;
    /**
     * Get messages for a room, optionally filtered by round.
     */
    getMessages(roomId: number, round?: number): Promise<any[]>;
    /**
     * Get join authorization from chat-server operator.
     * Returns commitment + operator signature for commit-reveal identity hiding.
     */
    getJoinAuth(roomId: number, isAI: boolean, maxPlayers: number): Promise<{
        commitment: string;
        salt: string;
        operatorSig: string;
    }>;
    /**
     * Update the creator's identity record from room_id=0 to the actual room ID.
     * Called after createRoom tx confirms on-chain.
     */
    updateRoomId(newRoomId: number): Promise<void>;
}
