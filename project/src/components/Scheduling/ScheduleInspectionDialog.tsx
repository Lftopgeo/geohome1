import React, { useState } from 'react';
import { X, Calendar, Clock } from 'lucide-react';
import { format, addDays, isWeekend, setHours, setMinutes } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface ScheduleInspectionDialogProps {
  onClose: () => void;
  onSchedule: (date: Date) => void;
}

export function ScheduleInspectionDialog({ onClose, onSchedule }: ScheduleInspectionDialogProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');

  // Generate available dates (next 30 days, excluding weekends)
  const availableDates = Array.from({ length: 30 }, (_, i) => {
    const date = addDays(new Date(), i + 1);
    return isWeekend(date) ? null : date;
  }).filter(Boolean) as Date[];

  // Available time slots
  const timeSlots = [
    '09:00', '10:00', '11:00', '14:00', '15:00', '16:00'
  ];

  const handleSchedule = () => {
    if (!selectedDate || !selectedTime) return;

    const [hours, minutes] = selectedTime.split(':').map(Number);
    const scheduledDateTime = setMinutes(setHours(selectedDate, hours), minutes);
    
    onSchedule(scheduledDateTime);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-md">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold">Agendar Vistoria</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Date Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <div className="flex items-center gap-2">
                <Calendar size={20} />
                <span>Selecione a Data</span>
              </div>
            </label>
            <div className="grid grid-cols-4 gap-2">
              {availableDates.map((date) => (
                <button
                  key={date.toISOString()}
                  onClick={() => setSelectedDate(date)}
                  className={`p-2 text-sm rounded-lg border transition-colors ${
                    selectedDate?.toDateString() === date.toDateString()
                      ? 'bg-[#DDA76A] text-white border-[#DDA76A]'
                      : 'hover:border-[#DDA76A] border-gray-200'
                  }`}
                >
                  {format(date, 'dd/MM', { locale: ptBR })}
                </button>
              ))}
            </div>
          </div>

          {/* Time Selection */}
          {selectedDate && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <div className="flex items-center gap-2">
                  <Clock size={20} />
                  <span>Selecione o Horário</span>
                </div>
              </label>
              <div className="grid grid-cols-3 gap-2">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`p-2 text-sm rounded-lg border transition-colors ${
                      selectedTime === time
                        ? 'bg-[#DDA76A] text-white border-[#DDA76A]'
                        : 'hover:border-[#DDA76A] border-gray-200'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Summary */}
          {selectedDate && selectedTime && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Confirmação</h3>
              <p className="text-sm text-gray-600">
                Data: {format(selectedDate, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
              </p>
              <p className="text-sm text-gray-600">
                Horário: {selectedTime}
              </p>
            </div>
          )}

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              Cancelar
            </button>
            <button
              onClick={handleSchedule}
              disabled={!selectedDate || !selectedTime}
              className="px-4 py-2 bg-[#DDA76A] text-white rounded-lg hover:bg-[#c89355] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Confirmar Agendamento
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}