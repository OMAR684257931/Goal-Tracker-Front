export interface Goal {
  id: string;
  title: string;
  description: string;
  deadline: string;
  isPublic: boolean;
  parentId?: string;
  order: number;
  publicId?: string;
  ownerId: string;
  createdAt: string;
  updatedAt: string;
}
