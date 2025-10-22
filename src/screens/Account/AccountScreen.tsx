import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export function AccountScreen() {
  return (
    <div className="flex w-full h-screen pt-20 px-40">
      <div className="w-full">
        <h1 className="text-xl font-bold">Falabella</h1>
        <div className="flex flex-row gap-9 border-b w-full pb-10 mt-4">
          <div className="shadow-md border rounded-lg p-5">
            <span className="text-md text-gray-500">Monto disponible</span>
            <h2 className="text-2xl font-semibold">$ 1.250.000</h2>
            <span className="text-md text-gray-500">Monto utilizado</span>
            <h2 className="text-2xl font-semibold">$ 200.000</h2>
          </div>
          <div className="shadow-md border rounded-lg p-5">
            <span className="text-md text-gray-500">Crédito disponible</span>
            <h2 className="text-2xl font-semibold">$ 800.000</h2>
            <span className="text-md text-gray-500">Crédito utilizado</span>
            <h2 className="text-2xl font-semibold">$ 120.000</h2>
          </div>
        </div>
        <div className="mt-10">
          <div className="flex justify-between mb-4">
            <Button>
              <Plus /> Agregar movimiento
            </Button>
            <NativeSelect>
              <NativeSelectOption value="">
                Todos los movimientos
              </NativeSelectOption>
              <NativeSelectOption value="apple">Débito</NativeSelectOption>
              <NativeSelectOption value="banana">Crédito</NativeSelectOption>
            </NativeSelect>
          </div>
          <div>
            <Table>
              <TableCaption>Tus movimientos</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Cuenta</TableHead>
                  <TableHead>Descripción</TableHead>
                  <TableHead>Tipo de gasto</TableHead>
                  <TableHead>Fecha</TableHead>
                  <TableHead className="text-right">Monto</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Crédito</TableCell>
                  <TableCell className="font-medium">Bencina</TableCell>
                  <TableCell>Auto</TableCell>
                  <TableCell>25/10/2025</TableCell>
                  <TableCell className="text-right">$40.000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Débito</TableCell>
                  <TableCell className="font-medium">Compra super8</TableCell>
                  <TableCell>Ocio</TableCell>
                  <TableCell>25/10/2025</TableCell>
                  <TableCell className="text-right">$250.000</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
