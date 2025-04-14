import { Pool } from 'pg';

const createMockConnectionPool = (): Pool => {
    // Create a mock pool that returns sample data
    return {
        query: async (text: string, params?: any[]) => {
            // Return mock data based on the query
            if (text.includes('SELECT * FROM fantasy_team')) {
                return {
                    rows: [
                        {
                            id: 1,
                            name: 'Sample Team',
                            points: 100,
                            rank: 1
                        }
                    ]
                };
            }
            // Add more mock data responses as needed
            return { rows: [] };
        },
        end: async () => {},
        on: () => {},
        connect: async () => ({ release: () => {} }),
    } as unknown as Pool;
};

export { createMockConnectionPool }; 