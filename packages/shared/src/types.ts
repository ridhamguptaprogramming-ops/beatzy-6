import { z } from 'zod';

export const UserIdSchema = z.string().min(1);
export type UserId = z.infer<typeof UserIdSchema>;

export const TrackIdSchema = z.string().min(1);
export type TrackId = z.infer<typeof TrackIdSchema>;

export const PaginationSchema = z.object({
  page: z.number().int().min(1).default(1),
  pageSize: z.number().int().min(1).max(100).default(20)
});

export type Pagination = z.infer<typeof PaginationSchema>;

