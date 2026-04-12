import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Leaf, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import type { TrayPublic } from "../backend";
import { NFTStandard } from "../backend";
import {
  useCreatePlant,
  useCreateTray,
  useDeleteTray,
  useUpdateTrayName,
} from "../hooks/useBackend";

interface TrayManagerProps {
  trays: TrayPublic[];
  selectedTrayId: bigint | null;
  onSelect: (trayId: bigint) => void;
}

export function TrayManager({
  trays,
  selectedTrayId,
  onSelect,
}: TrayManagerProps) {
  const [editingTrayId, setEditingTrayId] = useState<bigint | null>(null);
  const [editName, setEditName] = useState("");
  const [showAddTray, setShowAddTray] = useState(false);
  const [newTrayName, setNewTrayName] = useState("");
  const [confirmDeleteId, setConfirmDeleteId] = useState<bigint | null>(null);

  const createTray = useCreateTray();
  const updateTrayName = useUpdateTrayName();
  const deleteTray = useDeleteTray();

  async function handleCreateTray() {
    if (!newTrayName.trim()) {
      toast.error("Please enter a tray name");
      return;
    }
    try {
      const tray = await createTray.mutateAsync({
        name: newTrayName.trim(),
        planting_date: BigInt(Date.now() * 1_000_000),
        nft_standard: NFTStandard.ICRC37,
      });
      setNewTrayName("");
      setShowAddTray(false);
      onSelect(tray.id);
      toast.success(`Tray "${tray.name}" created!`);
    } catch (_e) {
      toast.error("Failed to create tray");
    }
  }

  async function handleRename(trayId: bigint) {
    if (!editName.trim()) {
      setEditingTrayId(null);
      return;
    }
    try {
      await updateTrayName.mutateAsync({ trayId, name: editName.trim() });
      setEditingTrayId(null);
      toast.success("Tray renamed");
    } catch (_e) {
      toast.error("Failed to rename tray");
    }
  }

  async function handleDelete(trayId: bigint) {
    try {
      await deleteTray.mutateAsync(trayId);
      setConfirmDeleteId(null);
      if (selectedTrayId === trayId && trays.length > 1) {
        const next = trays.find((t) => t.id !== trayId);
        if (next) onSelect(next.id);
      }
      toast.success("Tray removed");
    } catch (_e) {
      toast.error("Failed to remove tray");
    }
  }

  return (
    <div className="flex items-center gap-2 flex-wrap">
      {trays.map((tray) => (
        <div key={tray.id.toString()} className="flex items-center gap-0.5">
          {editingTrayId === tray.id ? (
            <div className="flex items-center gap-1">
              <Input
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleRename(tray.id);
                  if (e.key === "Escape") setEditingTrayId(null);
                }}
                className="h-8 w-32 bg-muted/40 border-border text-foreground text-sm"
                autoFocus
                data-ocid="tray-rename-input"
              />
              <Button
                size="sm"
                variant="ghost"
                onClick={() => handleRename(tray.id)}
                disabled={updateTrayName.isPending}
                className="h-8 px-2 text-primary"
              >
                {updateTrayName.isPending ? (
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  "✓"
                )}
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setEditingTrayId(null)}
                className="h-8 px-2 text-muted-foreground"
              >
                ✕
              </Button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => onSelect(tray.id)}
              className={[
                "px-3 py-1.5 rounded-md text-sm font-medium transition-smooth border",
                selectedTrayId === tray.id
                  ? "bg-primary/20 border-primary/50 text-primary"
                  : "bg-card border-border text-muted-foreground hover:text-foreground hover:bg-secondary",
              ].join(" ")}
              data-ocid={`tray-tab-${tray.id}`}
            >
              {tray.name}
            </button>
          )}
          {selectedTrayId === tray.id && editingTrayId !== tray.id && (
            <div className="flex gap-0.5">
              <button
                type="button"
                onClick={() => {
                  setEditingTrayId(tray.id);
                  setEditName(tray.name);
                }}
                className="px-1.5 py-1 text-xs text-muted-foreground hover:text-foreground transition-smooth"
                aria-label="Rename tray"
                data-ocid="tray-rename-btn"
              >
                ✏
              </button>
              <button
                type="button"
                onClick={() => setConfirmDeleteId(tray.id)}
                className="px-1.5 py-1 text-xs text-muted-foreground hover:text-red-400 transition-smooth"
                aria-label="Delete tray"
                data-ocid="tray-delete-btn"
              >
                🗑
              </button>
            </div>
          )}
        </div>
      ))}

      {/* Add tray */}
      {showAddTray ? (
        <div className="flex items-center gap-1">
          <Input
            value={newTrayName}
            onChange={(e) => setNewTrayName(e.target.value)}
            placeholder="Tray name…"
            onKeyDown={(e) => {
              if (e.key === "Enter") handleCreateTray();
              if (e.key === "Escape") setShowAddTray(false);
            }}
            className="h-8 w-36 bg-muted/40 border-border text-foreground text-sm"
            autoFocus
            data-ocid="new-tray-name-input"
          />
          <Button
            size="sm"
            onClick={handleCreateTray}
            disabled={createTray.isPending}
            className="h-8 bg-primary hover:bg-primary/90 text-primary-foreground px-3"
            data-ocid="new-tray-confirm-btn"
          >
            {createTray.isPending ? (
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
            ) : (
              "Add"
            )}
          </Button>
          <Button
            size="sm"
            variant="ghost"
            onClick={() => setShowAddTray(false)}
            className="h-8 px-2 text-muted-foreground"
          >
            Cancel
          </Button>
        </div>
      ) : (
        <Button
          size="sm"
          variant="outline"
          onClick={() => setShowAddTray(true)}
          className="h-8 border-dashed border-border text-muted-foreground hover:text-foreground"
          data-ocid="add-tray-btn"
        >
          <Leaf className="w-3.5 h-3.5 mr-1" />
          Add Tray
        </Button>
      )}

      {/* Delete confirmation dialog */}
      <Dialog
        open={!!confirmDeleteId}
        onOpenChange={(v) => !v && setConfirmDeleteId(null)}
      >
        <DialogContent className="max-w-sm bg-card border-border">
          <DialogHeader>
            <DialogTitle className="text-foreground">Remove Tray?</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-muted-foreground">
            This will remove the tray. Plants in this tray will remain in your
            inventory but lose their tray assignment.
          </p>
          <div className="flex gap-2 justify-end pt-2">
            <Button
              variant="outline"
              onClick={() => setConfirmDeleteId(null)}
              className="border-border"
            >
              Cancel
            </Button>
            <Button
              onClick={() => confirmDeleteId && handleDelete(confirmDeleteId)}
              disabled={deleteTray.isPending}
              className="bg-destructive hover:bg-destructive/90 text-destructive-foreground"
              data-ocid="tray-delete-confirm-btn"
            >
              {deleteTray.isPending ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                "Remove"
              )}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// ─── New Seed Modal ────────────────────────────────────────────────────────────

interface NewSeedModalProps {
  open: boolean;
  trayId: bigint;
  cellIndex: number;
  onClose: () => void;
}

const VARIETIES = [
  "Apocalypse Scorpion",
  "Death Spiral",
  "RB003",
  "Fried Chicken",
  "Scotch Bonnet",
  "Sugar Rush Peach",
  "Aji Charapita",
  "Calabrian (Cherry)",
  "Fish Pepper",
  "Farmers Market Jalapeno",
  "Aji Guyana",
  "Acoma Pueblo",
] as const;

export function NewSeedModal({
  open,
  trayId,
  cellIndex,
  onClose,
}: NewSeedModalProps) {
  const [commonName, setCommonName] = useState("");
  const [latinName, setLatinName] = useState("");
  const [variety, setVariety] = useState<string>(VARIETIES[0]);
  const [origin, setOrigin] = useState("");
  const [dateSowed, setDateSowed] = useState(
    new Date().toISOString().split("T")[0],
  );

  const createPlant = useCreatePlant();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      await createPlant.mutateAsync({
        tray_id: trayId,
        cell_position: BigInt(cellIndex),
        variety: variety,
        genetics: commonName || variety,
        notes: "",
        common_name: commonName || undefined,
        latin_name: latinName || undefined,
        origin: origin || undefined,
        planting_date: BigInt(new Date(dateSowed).getTime() * 1_000_000),
        nft_standard: NFTStandard.ICRC37,
      });
      toast.success("Seed planted!");
      onClose();
    } catch (_e) {
      toast.error("Failed to plant seed");
    }
  }

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-md bg-card border-border">
        <DialogHeader>
          <DialogTitle className="font-display text-foreground flex items-center gap-2">
            <Leaf className="w-5 h-5 text-primary" />
            Plant Seed — Cell {cellIndex + 1}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <Label className="text-foreground text-sm">Variety</Label>
            <Select value={variety} onValueChange={setVariety}>
              <SelectTrigger
                className="bg-muted/30 border-border text-foreground"
                data-ocid="new-seed-variety"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-popover border-border">
                {VARIETIES.map((v) => (
                  <SelectItem key={v} value={v}>
                    {v}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label className="text-foreground text-sm">Common Name</Label>
              <Input
                value={commonName}
                onChange={(e) => setCommonName(e.target.value)}
                placeholder="e.g. Carolina Reaper"
                className="bg-muted/30 border-border text-foreground"
                data-ocid="new-seed-common-name"
              />
            </div>
            <div className="space-y-1.5">
              <Label className="text-foreground text-sm">Latin Name</Label>
              <Input
                value={latinName}
                onChange={(e) => setLatinName(e.target.value)}
                placeholder="e.g. C. chinense"
                className="bg-muted/30 border-border text-foreground"
                data-ocid="new-seed-latin-name"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label className="text-foreground text-sm">Origin</Label>
              <Input
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                placeholder="Country / region"
                className="bg-muted/30 border-border text-foreground"
                data-ocid="new-seed-origin"
              />
            </div>
            <div className="space-y-1.5">
              <Label className="text-foreground text-sm">Date Sowed</Label>
              <Input
                type="date"
                value={dateSowed}
                onChange={(e) => setDateSowed(e.target.value)}
                className="bg-muted/30 border-border text-foreground"
                data-ocid="new-seed-date"
              />
            </div>
          </div>
          <div className="flex gap-2 justify-end pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="border-border"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={createPlant.isPending}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              data-ocid="new-seed-submit"
            >
              {createPlant.isPending ? (
                <Loader2 className="w-4 h-4 mr-1.5 animate-spin" />
              ) : (
                <Leaf className="w-4 h-4 mr-1.5" />
              )}
              Plant Seed
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
