
export interface WorkflowRun {
  id: number;
  name: string;
  status: 'completed' | 'in_progress' | 'queued' | 'waiting';
  conclusion: 'success' | 'failure' | 'cancelled' | 'skipped' | 'timed_out' | 'action_required' | null;
  head_branch: string;
  head_sha: string;
  run_number: number;
  event: string;
  created_at: string;
  updated_at: string;
  html_url?: string;
  duration_ms?: number;
}

export interface GitHubRepository {
  name: string;
  owner: string;
}
