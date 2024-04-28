const bcrypt = require('bcrypt');

function checkPasswordRequirements(password) {
    if (password.length < 9) {
        return false;
    }
    
    if (!/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
        return false;
    }
    
    if (!/\d/.test(password)) {
        return false;
    }

    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
        return false;
    }
    return true;
}

async function hashPassword(password) {
    try {
        if (!checkPasswordRequirements(password)) {
            console.log("Password does not meet requirements.");
            return;
        }
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        console.log("Hashed password:", hashedPassword);
        return hashedPassword;
    } catch (error) {
        console.error("Error:", error.message);
    }
}

async function compareWithHash(password, hash) {
    try {
        const match = await bcrypt.compare(password, hash);
        return match;
    } catch (error) {
        throw error;
    }
}

async function checkHash(password, hashedPassword) {
    try {
        const match = await compareWithHash(password, hashedPassword);
        if (match) {
            console.log("Success! Password matches hash.");
        } else {
            console.log("Error! Password does not match hash.");
        }
    } catch (error) {
        console.error("Error:", error.message);
    }
}

module.exports = { checkPasswordRequirements, hashPassword, compareWithHash, checkHash };
