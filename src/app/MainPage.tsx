import {
  ArrowRight,
  CircleCheck,
  ListTodo,
  MoveRight,
  Plus,
  Star,
  Trophy,
} from "lucide-react";
import { getGreeting } from "../shared/lib/utils/getGreeting";
import { Card } from "../shared/ui/card/Card";
import { Cont } from "../shared/ui/Cont";
import { cn } from "../shared/lib/utils/cn";
import { useEffect, useState } from "react";
import { Button } from "../shared/ui/button/Button";
import { Link } from "react-router";
// TODO: Divide into widgets
export const MainPage = () => {
  // TODO: Get tasks from api, and change bar width calculation logic
  const [barWidth, setBarWidth] = useState(0);

  // TODO: Refactor
  useEffect(() => {
    setTimeout(() => {
      setBarWidth(80);
    }, 300);
  }, []);

  return (
    <Cont className="py-10 space-y-10">
      <div className="space-y-2">
        {/* TODO: Get username */}
        <h1 className="font-semibold text-4xl">
          {getGreeting()}, {"{username}"}!
        </h1>
        <p className="text-xl text-neutral-400">
          Here's what's happening with your tasks today.
        </p>
      </div>

      <div className="flex items-stretch justify-between gap-5">
        <Card className="w-full flex flex-col justify-between gap-2">
          <div className="flex items-center justify-between text-sm font-medium">
            <h3>Tasks Completed</h3>
            <CircleCheck size={16} className="text-neutral-500" />
          </div>
          <div className="space-y-3">
            <div className="text-2xl font-semibold">12/15</div>
            <div className="flex relative">
              <div
                // TODO: Refactor
                style={{ width: `${barWidth}%` }}
                className={cn(
                  "relative z-10 bg-blue-600 h-4 rounded-l-xl transition-all duration-300"
                )}
              />
              <div
                className={cn(
                  "absolute bg-neutral-100 h-4 rounded-xl w-full transition-all duration-300"
                )}
              />
            </div>
          </div>
          <div className="text-xs text-neutral-400">
            {/* TODO: Refactor */}
            {barWidth}% completion rate this week
          </div>
        </Card>

        <Card className="w-full flex flex-col justify-between gap-2">
          <div className="flex items-center justify-between text-sm font-medium">
            <h3>Current Streak</h3>
            <Trophy size={16} className="text-neutral-500" />
          </div>
          <div className="text-2xl font-semibold">5 days</div>
          <div className="text-xs text-neutral-400">
            Keep it up! You're doing great
          </div>
        </Card>

        <Card className="w-full flex flex-col justify-between gap-2">
          <div className="flex items-center justify-between text-sm font-medium">
            <h3>Priority Tasks</h3>
            <Star size={16} className="text-neutral-500" />
          </div>
          <div className="text-2xl font-semibold">3 tasks</div>
          <div className="text-xs text-neutral-400">
            Due within the next 24 hours
          </div>
        </Card>
      </div>

      <div className="flex items-stretch justify-between gap-5">
        <Card className="flex flex-col gap-5 w-full">
          <div>
            <h2 className="text-2xl font-medium">Quick Actions</h2>
            <div className="text-sm text-neutral-400">
              Get started with these common tasks
            </div>
          </div>
          <div className="w-full flex flex-col gap-3">
            <Button variant="outline" className="justify-start">
              <Plus />
              Create new task
            </Button>
            <Button variant="outline" className="justify-start">
              <ListTodo />
              View all tasks
            </Button>
          </div>
        </Card>

        <Card className="flex flex-col gap-5 w-full">
          <div>
            <h2 className="text-2xl font-medium">Getting Started</h2>
            <div className="text-sm text-neutral-400">
              Complete these steps to get the most out of the app
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <Button
              variant="ghost"
              className="w-full flex items-center justify-between gap-3 p-3 h-12 group"
            >
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "rounded-full p-2 transition-colors bg-gray-100",
                    {
                      "bg-green-100": true,
                    }
                  )}
                >
                  <CircleCheck
                    className={cn("transition-colors text-gray-400", {
                      "text-green-500": true,
                    })}
                  />
                </div>
                <div className="flex flex-col items-start">
                  <div className="text-sm">Create your first task</div>
                  <div className="text-sm text-neutral-400">
                    Add something to your todo list
                  </div>
                </div>
              </div>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="ghost"
              className="w-full flex items-center justify-between gap-3 p-3 h-12 group"
            >
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "rounded-full p-2 transition-colors bg-gray-100",
                    {
                      "bg-green-100": false,
                    }
                  )}
                >
                  <CircleCheck
                    className={cn("transition-colors text-gray-400", {
                      "text-green-500": false,
                    })}
                  />
                </div>
                <div className="flex flex-col items-start">
                  <div className="text-sm">Set up notifications</div>
                  <div className="text-sm text-neutral-400">
                    Never miss a deadline
                  </div>
                </div>
              </div>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="ghost"
              className="w-full flex items-center justify-between gap-3 p-3 h-12 group"
            >
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "rounded-full p-2 transition-colors bg-gray-100",
                    {
                      "bg-green-100": false,
                    }
                  )}
                >
                  <CircleCheck
                    className={cn("transition-colors text-gray-400", {
                      "text-green-500": false,
                    })}
                  />
                </div>
                <div className="flex flex-col items-start">
                  <div className="text-sm">Invite team members</div>
                  <div className="text-sm text-neutral-400">
                    Collaborate with others
                  </div>
                </div>
              </div>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </Card>
      </div>

      <Card className="flex flex-col gap-5 w-full">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-medium">Recent Activity</h2>
            <div className="text-sm text-neutral-400">
              Your latest actions and updates
            </div>
          </div>
          <Button variant="link" asChild>
            <Link to="/history" className="group">
              See History
              <MoveRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="bg-neutral-800 size-2 rounded-full" />
              <div className="flex flex-col items-start">
                <div className="text-sm">Completed task</div>
                <div className="text-sm text-neutral-400">
                  Update onboarding workflow templates
                </div>
              </div>
            </div>
            <div className="text-sm text-neutral-400">2 hours ago</div>
          </div>

          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="bg-neutral-800 size-2 rounded-full" />
              <div className="flex flex-col items-start">
                <div className="text-sm">Added new task</div>
                <div className="text-sm text-neutral-400">
                  Finish user onboarding
                </div>
              </div>
            </div>
            <div className="text-sm text-neutral-400">5 hours ago</div>
          </div>

          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="bg-neutral-800 size-2 rounded-full" />
              <div className="flex flex-col items-start">
                <div className="text-sm">Updated task</div>
                <div className="text-sm text-neutral-400">
                  Hold to reorder on mobile
                </div>
              </div>
            </div>
            <div className="text-sm text-neutral-400">1 day ago</div>
          </div>
        </div>
      </Card>
    </Cont>
  );
};
