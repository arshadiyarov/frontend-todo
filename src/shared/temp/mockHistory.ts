import { HistoryEntity } from "../../entities/history/model/history";

export const mockHistory: HistoryEntity[] = [
  {
    id: "1",
    action: "added",
    title: "Update onboarding workflow templates",
    createdAt: new Date(Date.now() - 30 * 1000), // 30 seconds ago
    updatedAt: new Date(Date.now() - 30 * 1000), // 30 seconds ago
  },
  {
    id: "2",
    action: "completed",
    title: "Finish user onboarding",
    createdAt: new Date(Date.now() - 5 * 60 * 1000), // 5 minutes ago
    updatedAt: new Date(Date.now() - 5 * 60 * 1000), // 5 minutes ago
  },
  {
    id: "3",
    action: "updated",
    title: "Hold to reorder on mobile",
    createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000), // 3 hours ago
    updatedAt: new Date(Date.now() - 3 * 60 * 60 * 1000), // 3 hours ago
  },
  {
    id: "4",
    action: "completed",
    title: "Fix issue with dark mode toggle",
    createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000), // 4 days ago
    updatedAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000), // 4 days ago
  },
  {
    id: "5",
    action: "deleted",
    title: "Refactor header component",
    createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000), // 10 days ago (> 7 days)
    updatedAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000), // 10 days ago (> 7 days)
  },
];
