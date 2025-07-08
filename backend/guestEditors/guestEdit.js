let guests = [];

export const getGuest = (req, res) => res.json(guests);

export function addGuest(req, res) {
  const { beklemeListesi, selectedDate, selectedTime, selectedGuest, selectedName, selectedEmail, selectedPhone } = req.body;
  
  const newGuest = { 
    id: Date.now(),
    beklemeListesi: beklemeListesi,
    selectedDate: selectedDate,
    selectedTime: selectedTime,
    selectedGuest: selectedGuest,
    selectedName: selectedName,
    selectedPhone: selectedPhone,
    selectedEmail: selectedEmail,
    completed: false
  };
  guests.push(newGuest);
  
  res.status(201).json(newGuest);
}

export const updateGuest = function (req, res) {
  const { id } = req.params;
  const { completed } = req.body;
  const guest = guests.find((t) => t.id == id);

  if (!guest) return res.status(404).json({ error: "Misafir bulunamadı!" });

  guest.completed = completed;
  res.json(guest);
};

export const deleteGuest = (req, res) => {
  const { id } = req.params;
  const guest = guests.find((t) => t.id == id);

  if (!guest) return res.status(404).json({ error: "Misafir bulunamadı!" });

  guests = guests.filter((t) => t.id != id);
  res.status(204).send();
};