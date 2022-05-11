import Hotel from "../models/Hotel.js";

export const createHotel = async (req, res, next) => {
    const newhotel = new Hotel(req.body)
    try {
        const savedHotel = await newhotel.save()
        res.status(200).json(savedHotel)
    } catch (error) {
        res.status(500).json(error);
    }
}

export const updateHotel = async (req, res, next) => {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedHotel)
    } catch (error) {
        res.status(500).json(error);
    }
}

export const deleteHotel = async (req, res, next) => {
    try {
        const deletedHotel = await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json(deletedHotel)
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getHotel = async (req, res, next) => {
    try {
        const foundHotel = await Hotel.findById(req.params.id)
        res.status(200).json(foundHotel)
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getHotels = async (req, res, next) => {
    try {
        const hotels = await Hotel.find()
        res.status(200).json(hotels)
    } catch (error) {
        res.status(500).json(error);
    }
}