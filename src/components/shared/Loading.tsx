import { Skeleton } from "@/components/ui/skeleton";

export function EditorLoading() {
  return (
    <div className="space-y-4 p-6">
      <Skeleton className="h-10 w-48 mb-6" />
      <div className="space-y-2">
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-6 w-2/3" />
      </div>
    </div>
  );
}